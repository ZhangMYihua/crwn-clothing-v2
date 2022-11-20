import { useContext, Fragment } from 'react';

import { CategoryContext } from '../../contexts/category.context'; 
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoryContext)
    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => (
                <CategoryPreview key={title} title={title} products={categoriesMap[title].slice(0,4)}/>
            ))}
        </Fragment>
    )
}

export default CategoriesPreview;