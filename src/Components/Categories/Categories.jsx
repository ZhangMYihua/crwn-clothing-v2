import {CategoryItem} from "../Category-item/CategoryItem";

export const Categories = ({ categories }) => {

    return (
        <div className='categories-container'>
            {categories.map((cat) => (
                <CategoryItem key={cat.id} category={cat} />
            ))}
        </div>
    )
}