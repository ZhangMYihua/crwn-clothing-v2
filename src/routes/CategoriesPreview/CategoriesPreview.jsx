import "./CategoriesPreview.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { ReactComponent as CrownLogo } from "../../assets/crown-logo.svg";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div className="categories-preview-container">
            <h2 className="categories-preview-header-title">
                <CrownLogo /> CLOTHING IS HERE FOR KINGS & QUEENS
            </h2>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
        </div>
    );
};

export default CategoriesPreview;
