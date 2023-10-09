import { useDispatch, useSelector } from "react-redux";
import { toggleNavState } from "../stores/navStore";
import "../assets/css/Nav.css";

export const Nav = () => {
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.navState);

  const handleClick = () => {
    dispatch(toggleNavState());
  };

  let btnClass = navState ? "btn-right" : "btn-left";
  let navClass = navState ? "nav-yellow" : "nav-dark";
  let logoClass = navState ? "logo-dark" : "logo-yellow";

  return (
    <>
      <nav className={navClass}>
        <i className={`fa-solid fa-code nav-icons ${logoClass}`}></i>
        <div id="btn-switch">
          <div className={btnClass} onClick={handleClick}></div>
        </div>
        <i className={`fa-solid fa-pen-nib nav-icons ${logoClass}`}></i>
      </nav>
    </>
  );
};

export default Nav;
