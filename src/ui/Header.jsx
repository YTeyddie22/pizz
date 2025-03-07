import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
    return (
        <header>
            <Link to="/">Pizz Co.</Link>
            <SearchOrder />
            <p>Teddy</p>
        </header>
    );
};

export default Header;
