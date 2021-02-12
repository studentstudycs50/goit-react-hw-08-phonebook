import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { signOutAction } from "../../redux/actions/formActions";
import { signOutOperation } from "../../redux/operations/authOperatins";
import { getName } from "../../redux/selectors/authSelectors";
import LogOutStyled from "./LogOutStyled"

const LogOut = () => {

    const dispatch = useDispatch();
    const name = useSelector(getName)

    const onHandleClick = () => {
        dispatch(signOutOperation());
        dispatch(signOutAction())
    }

    return (
        <LogOutStyled>
            <p className="user-hi">Hi, <span className="user-name">{name}</span></p>
            <button className="button" onClick={onHandleClick} type="button">Log Out</button>
        </LogOutStyled>
    )
}

export default LogOut;