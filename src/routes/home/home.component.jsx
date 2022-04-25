import DirectoriesList from '../../components/directory-list/directory-list.component';

import directoriesJson from '../../directories.json';

const Home = () => {
    return <DirectoriesList newDirectories={directoriesJson} />;
}

export default Home;