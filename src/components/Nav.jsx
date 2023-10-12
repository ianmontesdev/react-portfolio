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

  return (
    <>
      <nav className={navClass}>
        <i className="fa-solid fa-address-card"></i>
        <section>
          <i className={`fa-solid fa-code nav-icons`}></i>
          <div id="btn-switch" onClick={handleClick}>
            <div className={btnClass}></div>
          </div>
          <i className={`fa-solid fa-pen-nib nav-icons`}></i>
        </section>
        <i className="fa-solid fa-paper-plane"></i>
      </nav>
    </>
  );
};

export default Nav;
