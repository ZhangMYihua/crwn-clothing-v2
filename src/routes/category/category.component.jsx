import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, useState, useEffect } from "react";
import "./category.styles.scss"
import ProductCard from "../../components/product-card/product-card.components";

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className="category-container">
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))
            }
        </div >
    )
}

export default Category;