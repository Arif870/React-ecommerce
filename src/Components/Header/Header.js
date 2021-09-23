import "./Header.css";
import Logo from "../../Images/logo.png";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";

let Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src={Logo} alt="" />
        <Search />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
