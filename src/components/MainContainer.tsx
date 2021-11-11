import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";
import theme from "../theme/theme";

/**
 * Main container 
 */
const MainContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <CssBaseline>

            <ThemeProvider theme={theme}>

                <Box sx={{
                    backgroundImage: "url(" + "https://i.pinimg.com/originals/d3/45/72/d3457228c24809c0ecef2040d39636fc.jpg" + ")",
                    minHeight: "100vh",
                    padding: "1rem 0",
                    display: "flex",
                    alignItems: "stretch"
                }}>

                    <Container fixed sx={{position: "relative"}}>
                        {children}
                    </Container>

                </Box>

            </ThemeProvider>

        </CssBaseline>
    );

}

export default MainContainer;