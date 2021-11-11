import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

/**
 * Logout function
 */
const UserBar:React.FC = () => {

    return(
        <Stack direction="row-reverse">

            <Link to="/logout" style={{textDecoration: "none"}}>
                <Button variant="text" startIcon={<LogoutIcon/>}>
                    Cerrar sesion
                </Button>
            </Link>

        </Stack>
    );

}

export default UserBar;