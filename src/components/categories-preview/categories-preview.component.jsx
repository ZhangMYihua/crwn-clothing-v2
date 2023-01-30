import { useContext, Fragment } from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component'
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/category/category.selector';


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <Fragment>
            { !isLoading ? (
                Object.keys(categoriesMap).map(title => (
                    <CategoryPreview key={title} title={title} products={categoriesMap[title].slice(0,4)}/>
                ))
             ) : (
                <Spinner/>
            ) }
        </Fragment>
    )
}

export default CategoriesPreview;