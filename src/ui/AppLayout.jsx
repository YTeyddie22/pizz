import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
    const loading = useNavigation().state === "loading";
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
};

export default AppLayout;
