import { Link, Outlet } from "react-router-dom";
import { CartPanel } from "../cart/CartPanel";
import logo from "./logo.png";

const Navigation: React.FC = () => {
  return (
    <>
      <nav className="nav-container">
        {/* ***Logo*** */}
        <Link to="/">
          <img
            src={logo}
            width={"100rem"}
            title="SK mobiles"
            alt="SK mobiles"
          />
        </Link>
        {/* ***Menu*** */}
        <div className="nav-menu">
          <Link className="menu-items" to="/home">
            Home
          </Link>
          <Link className="menu-items" to="/products">
            Shop
          </Link>
          <Link className="menu-items" to="/about">
            About
          </Link>
        </div>
        {/* ***cartIcon*** */}

        <CartPanel />
        {/* ***Sign Options*** */}
        <div className="nav-options">
          <Link className="option-btns" to="/">
            Sign In
          </Link>
          <Link className="option-btns dark" to="/">
            Sign Up
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
