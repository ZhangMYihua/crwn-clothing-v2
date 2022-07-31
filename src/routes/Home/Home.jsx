import './Home.scss'
import Categories from "../../components/Categories/Categories";
import { categoriesTypes } from "../../components/Categories/CategoriesTypes";

const Home = () => {

    return (
        <div className="home-container">
            <Categories categories={categoriesTypes} />
        </div>
    );
};

export default Home;
