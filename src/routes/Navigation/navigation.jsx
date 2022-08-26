import "./navigation.scss";
import IconSvg from "../../svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="container">
        <Outlet />
        <div className="nav">
          <Link to="/fund" className="links fund-link">
            <IconSvg color={"#00AFEF"} icon={"Group_201"} />
          </Link>
          <Link to="/" className="links home-link">
            <IconSvg color={"#00AFEF"} icon={"Icon_material-home"} />
          </Link>
          <Link to="/profile" className="links user-link">
            <IconSvg color={"#00AFEF"} icon={"Icon_awesome-user"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
