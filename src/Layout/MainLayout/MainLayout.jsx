import TheHeader from "../../components/TheHeader/TheHeader";
import TheFooter from '../../components/TheFooter/TheFooter';
import { Outlet } from "react-router";


function MainLayout() {
    return (
        <div>
            <TheHeader />
            <main>
                <Outlet></Outlet>
                 </main>
            <TheFooter />
        </div>
    )
}

export default MainLayout;