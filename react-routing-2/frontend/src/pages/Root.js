import MainNavigation from "../components/MainNavigation";
import {Outlet, useNavigation} from "react-router-dom";

function RootLayout() {
    return <>
        <MainNavigation/>
        <main>
            <Outlet/>
        </main>
    </>
}

export default RootLayout