import { TextField } from "@mui/material";
import React from "react";
import { Auth } from "../types/Auth";

/**
 * login form
 */
const AuthFormInput:React.FC<Auth.InputProps> = ({id, label, type, setValue}):JSX.Element => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value);

    }

    return(
        <TextField
            fullWidth
            id={id}
            label={label}
            type={type}
            variant="outlined"
            onChange={handleChange}
            size="small"
            sx={{
                marginY: "0.75rem"
            }}
        />
    );

}

export default AuthFormInput;