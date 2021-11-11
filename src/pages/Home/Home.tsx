import { Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React, { useContext, useEffect } from "react";
import InnerPageContainer from "../../components/InnerPageContainer";
import { BandsContext } from "../../context/BandsContext";
import BandsGrid from "./BandsGrid/BandsGrid";
import SortBar from "./SortBar/SortBar";

/**
 * Home page for authorized users, display a grid of cards containing bands data and sort options.
 */
const Home:React.FC = ():JSX.Element => {

    const { bands, fetchBands } = useContext(BandsContext);

    useEffect(() => fetchBands(), []);

    return(
        <InnerPageContainer>
            
            <Typography variant="h3" fontWeight="bold" color={deepPurple[300]} mb={8}>BANDAS MUSICALES</Typography>
            
            <SortBar/>
            
            <BandsGrid bands={bands}/>

        </InnerPageContainer>
    );

}

export default Home;