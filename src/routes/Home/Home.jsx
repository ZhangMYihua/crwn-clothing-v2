import Categories from "../../components/Categories/Categories";
import { categoriesTypes } from "../../components/Categories/CategoriesTypes";

const Home = () => {

    return (
        <Categories categories={categoriesTypes} />
    );
};

export default Home;
