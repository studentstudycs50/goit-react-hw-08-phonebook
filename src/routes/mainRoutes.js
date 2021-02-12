import {lazy} from "react";

const mainRoutes = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: lazy(()=>import("../pages/HomePage/HomePage" /* webpackChunkName: "HomePage"*/)),
        isPrivate: false,
        restricted: false,
    },
    {
        path: "/signup",
        name: "Registration",
        exact: false,
        component: lazy(() => import("../pages/SignUpPage/SignUpPage" /* webpackChunkName: "SignUpPage"*/)),
        isPrivate: false,
        restricted: true,
    },
    {
        path: "/signin",
        name: "Login",
        exact: false,
        component: lazy(() => import("../pages/SignIn/SignInPage" /* webpackChunkName: "SignInPage"*/)),
        isPrivate: false,
        restricted: true,
    },
    {
        path: "/contacts",
        name: "Contacts",
        exact: false,
        component: lazy(() => import("../pages/ContactsPage/ContactsPage" /* webpackChunkName: "ContactsPage"*/)),
        isPrivate: true,
        restricted: false,
    },
]

export {mainRoutes}

