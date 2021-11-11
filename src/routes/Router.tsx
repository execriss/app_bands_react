import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import RequireNotAuth from "../components/RequireNotAuth";
import { BandsProvider } from "../context/BandsContext";
import BandPage from "../pages/BandPage/BandPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import LogOut from "../pages/LogOut/LogOut";

/**
 * Router component of the site. Controls all the available routes in the site and manage
 * the authorization required for each one, also provide context providers to page components
 * that makes use of them.
 */
const Router:React.FC = ():JSX.Element => {

    return(
        <HashRouter>

            <Switch>

                <Route exact path="/">
                    <RequireAuth>
                        <BandsProvider>
                            <Home/>
                        </BandsProvider>
                    </RequireAuth>
                </Route>

                <Route path="/band/:id">
                    <RequireAuth>
                        <BandPage/>
                    </RequireAuth>
                </Route>

                <Route path="/login">
                    <RequireNotAuth>
                        <LogIn/>
                    </RequireNotAuth>
                </Route>

                <Route path="/logout">
                    <LogOut/>
                </Route>

            </Switch>

        </HashRouter>
    );

}

export default Router;