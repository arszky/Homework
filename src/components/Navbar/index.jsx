import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../lib/images/logo.png";
import account from "../../lib/images/account.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header-left">
        <img src={logo} className="header-logo" alt="spotify" />
      </div>
      <div className="header-right">
        <div className="profile">
          <img src={account} className="account" alt="spotify account" />
        </div>
        <div className="logoutBtn">
          <button className="logout-btn">
            <Link className="logout" to="/">
              Log out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
