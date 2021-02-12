import { React } from "react";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "../Header/NavigationItem";
import LogOut from "../LogOut/LogOut";
import HeaderStyled from "./HeaderStyled"

const Header = () => {
    const isAuth = useSelector(getAuth)
   
    return (
        <HeaderStyled>
        <div className="header"> 
            <ul className="header-ul">
                {mainRoutes.map((route) =>
                   ( <NavigationItem {...route} key={route.path} />
                ))}
            </ul>
            {isAuth && <LogOut />}
        </div>
        </HeaderStyled>
    )
}

export default Header;

