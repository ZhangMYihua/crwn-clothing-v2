import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
    return (
        <>
            <Directory />
            <Outlet />
        </>
    );
};

export default Home;
