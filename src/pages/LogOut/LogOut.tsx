import React from "react";
import { Redirect } from "react-router";
import FakeAuth from "../../libs/FakeAuth";

/**
 * Log out page component. Destroy the current user session and redirect to log in page.
 */
const LogOut:React.FC = ():JSX.Element => {
    
    FakeAuth.logOut();

    return(<Redirect to="/login"/>);

}

export default LogOut;