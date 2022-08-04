import "./category.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card";
import Searchbar from "../../components/searchbar/searchbar";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        searchField === ""
            ? setProducts(categoriesMap[category])
            : setProducts(
                categoriesMap[category].filter((product) =>
                    product.name.toLowerCase().includes(searchField.toLowerCase())
                )
            );
    }, [searchField, category, categoriesMap]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="category-container">
            <h2 className="category-title">{category.toUpperCase()}</h2>

            <Searchbar
                className="category-searchbar"
                placeholder={`Search ${category}`}
                searchChangeHandler={onSearchChange}
            />

            <div className="category">
                {products &&
                    products.map((product) => {
                        return <ProductCard key={product.id} product={product} />;
                    })}
            </div>
        </div>
    );
};

export default Category;
