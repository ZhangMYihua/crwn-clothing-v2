import './Home.scss'
import Categories from "../../components/Categories/Categories";
import { categoriesTypes } from "../../database/CategoriesTypes";
import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg';

const Home = () => {

    return (
        <div className="home-container">
            <h2>
                CROWN <CrownLogo /> CLOTHING
            </h2>
            <Categories categories={categoriesTypes} />
        </div>
    );
};

export default Home;
