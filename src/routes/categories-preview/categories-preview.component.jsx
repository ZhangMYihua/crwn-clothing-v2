import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

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