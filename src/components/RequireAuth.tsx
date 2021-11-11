import React from "react";
import { Redirect } from "react-router";

/**
 *  check if the session is active and show the component
 * 
 */
const RequireAuth:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const auth = localStorage.getItem("auth");

    return(
        <>
            {(auth && auth === "true") ? children : <Redirect to="/login"/>}
        </>
    );

}

export default RequireAuth;