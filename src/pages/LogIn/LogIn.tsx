import { Button, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthFormInput from "../../components/AuthFormInput";
import LogInContainer from "../../components/LogInContainer";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FakeAuth from "../../libs/FakeAuth";
import { useHistory } from "react-router";


const LogIn:React.FC = ():JSX.Element => {

    const history = useHistory();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [message, setMessage] = useState<string>("");

    const submitForm = async () => {

        const auth = await FakeAuth.LogIn(username, password);

        if (auth === true) {
            history.push("/");
        } else {
            setMessage(auth);
        }

    }

    return(
        <LogInContainer>
            
            <LockOpenIcon color="primary" fontSize="large"/>
            <Typography variant="h4" fontWeight="bold" mb={2}>Iniciar sesión</Typography>

            {message ? <Typography variant="body2" fontWeight="light" mb={2} sx={{color: "red"}}>{message}</Typography> : null}

            <AuthFormInput
                id="username"
                label="Usuario"
                type="text"
                setValue={setUsername}
            />
            <AuthFormInput
                id="password"
                label="Contraseña"
                type="password"
                setValue={setPassword}
            />

            <Button
                fullWidth
                variant="contained"
                onClick={submitForm}
                sx={{
                    marginTop: "1rem"
                }}
            >Ingresar</Button>


        </LogInContainer>
    );

}

export default LogIn;