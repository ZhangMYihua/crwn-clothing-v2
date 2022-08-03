import "./categories.scss";
import CategoryItem from "../category-item/category-item";

const Categories = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Categories