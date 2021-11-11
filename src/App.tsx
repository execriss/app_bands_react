import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./components/MainContainer";
import Router from "./routes/Router";

const App:React.FC = ():JSX.Element => {

    return(
        <MainContainer>
            <Router/>
        </MainContainer>
    );

}

ReactDOM.render(<App/>, document.getElementById("root"));