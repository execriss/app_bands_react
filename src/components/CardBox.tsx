import { Paper } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

/**
 * container of cards that are rendered in the application
 */
const CardBox:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Paper elevation={1} sx={{
            textAlign: "center",
            borderRadius: "0.5rem",
            backgroundColor: "#B0B0E3",
            color: '#aa00ff',
            padding: "2rem 1rem",
            height: "70%"
        }}>
            {children}
        </Paper>
    );

}

export default CardBox;