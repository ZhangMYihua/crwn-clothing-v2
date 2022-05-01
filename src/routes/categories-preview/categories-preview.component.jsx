import { Fragment } from 'react';

import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {
                isLoading ?
                <Spinner /> :
                (Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title].slice(0, 4);

                    return (<CategoryPreview
                        products={products}
                        title={title}
                        key={title}
                    />);
                }))
            }
        </Fragment>
    );
}

export default CategoriesPreview;