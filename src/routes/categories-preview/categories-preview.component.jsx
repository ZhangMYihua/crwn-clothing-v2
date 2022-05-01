import { Fragment } from 'react';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title].slice(0, 4);

                    return (<CategoryPreview
                        products={products}
                        title={title}
                        key={title}
                    />);
                })
            }
        </Fragment>
    );
}

export default CategoriesPreview;