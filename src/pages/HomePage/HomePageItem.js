import React from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuth } from "../../redux/selectors/authSelectors";

const HomePageItem = ({ name, path, exact, isPrivate, restricted }) => {
  const isAuth = useSelector(getAuth);

  return (
    <>
      {!isAuth && !isPrivate && restricted && (
        <li className="home-li" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="home-link"
            activeClassName="active-link"
          >
            {name}
          </NavLink>
        </li>
      )}
      {isAuth && isPrivate && !restricted && (
        <li className="home-li" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="home-link"
            activeClassName="active-link"
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default HomePageItem;