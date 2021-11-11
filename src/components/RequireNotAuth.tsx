import React from "react";
import { Redirect } from "react-router";

/**
 * If the session is NOT started, perform the following action
 */
const RequireNotAuth:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const auth = localStorage.getItem("auth");

    return(
        <>
            {(!auth || auth === "false") ? children : <Redirect to="/"/>}
        </>
    );

}

export default RequireNotAuth;