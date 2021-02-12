import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { signInOperation } from "../../redux/operations/authOperatins";
import { getError } from "../../redux/selectors/authSelectors";
import Notification from "../../component/Notification/Notification";
import SignInStyled from './SignInStyled';

const initialState = {
    email: "",
    password: "",
}

const Login = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState({ ...initialState });
    const error = useSelector(getError);
    const [notification, setNotification] = useState("");
    const [showNotification, setShowNotification] = useState(false)
    
    const showNotificationAlert = (notification) => {
   setNotification(notification);
   setShowNotification(true);
   setTimeout(() => {
     setShowNotification(false);
   }, 2000)
    setTimeout(() => {
     setNotification("");
   }, 2500)
    }
    
    const onHandleChange = event => {
        const { name, value } = event.target;
        setState((prev) =>({...prev, [name]: value}))
    }

    const onHandleSubmit = event => {
        event.preventDefault();

        if (error === 400) {
            showNotificationAlert('Wrong password or email');
            setState(initialState)
        } else {
            dispatch(signInOperation(state))
            setState(initialState)
        }
    }

    return (
        <SignInStyled>
            <CSSTransition in={showNotification} timeout={250} unmountOnExit>
                <Notification notification={notification}/>
            </CSSTransition>
            <h2 className="login-title">Log In</h2>
            <form onSubmit={onHandleSubmit} className="login-form">
                <label className="login-label">
                    Email
                    <input className="login-input" type="text" name="email" placeholder="Writing email" value={state.email} onChange={onHandleChange}/>
                </label>

                 <label className="login-label">
                    Password
                    <input className="login-input" type="text" name="password" placeholder="Writing password" value={state.password} onChange={onHandleChange}/>
                </label>

                <button className="button" type="submit">Login</button>
            </form>
        </SignInStyled>
    )
}

export default Login;