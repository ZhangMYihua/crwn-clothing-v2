import CategoriesList from '../../components/categories-list/categories-list.component';

import categoriesJson from '../../categories.json';

const Home = () => {
    return <CategoriesList newCategories={categoriesJson} />;
}

export default Home;