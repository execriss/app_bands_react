import { Box } from "@mui/system";
import React from "react";
import UserBar from "./UserBar";

/**
 * visible only if the session is started
 * Contains the user bar.
 */
const InnerPageContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Box>
            <UserBar/>
            <Box>
                {children}
            </Box>
        </Box>
    );

}

export default InnerPageContainer;