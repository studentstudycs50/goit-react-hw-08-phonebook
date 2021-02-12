import React from "react";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors/authSelectors";
import HomePageItem from "./HomePageItem"
import {mainRoutes} from "../../routes/mainRoutes"
import HomePageStyled from "./HomePageStyled"

const HomePage = () => {
    const isAuth = useSelector(getAuth)
    
    return (
        <HomePageStyled>
            <h2 className="home-title">Home Page</h2>
            <ul className="home-ul">
                {mainRoutes.map((route) => (
                    <HomePageItem {...route} key={route.path}/>
                ))}
            </ul>
        </HomePageStyled>
    )
}
export default HomePage;