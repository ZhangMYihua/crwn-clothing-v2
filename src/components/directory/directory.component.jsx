import { CATEGORIES } from "../categories-menu/categories-menu";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = () => {
	return (
		<div className="directory-container ">
			{CATEGORIES.map((category) => (
				<CategoryItem id={category.id} category={category} />
			))}
		</div>
	);
};

export default Directory;
