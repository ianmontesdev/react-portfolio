import { useDispatch, useSelector } from "react-redux";
import { toggleNavState } from "../stores/navStore";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.navState);

  const handleClick = () => {
    dispatch(toggleNavState());
  };

  let btnClass = navState ? "btn-right" : "btn-left";
  let navClass = navState ? "nav-yellow" : "nav-dark";

  return (
    <>
      <nav className={navClass}>
        <Link to={"/about"}>
          <i className={`fa-solid fa-address-card ${navClass}`}></i>
        </Link>
        <Link to={"/"}>
          <section>
            <i className={`fa-solid fa-code nav-icons ${navClass}`}></i>
            <div id="btn-switch" onClick={handleClick}>
              <div className={btnClass}></div>
            </div>
            <i className={`fa-solid fa-pen-nib nav-icons ${navClass}`}></i>
          </section>
        </Link>
        <Link to={"/contact"}>
          <i className={`fa-solid fa-paper-plane ${navClass}`}></i>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
