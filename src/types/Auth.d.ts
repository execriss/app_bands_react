import React from "react";

/**
 * Types used by FakeAuth class
 */
export namespace Auth {

    /** User object from fake users database API */
    type User = {
        username:string,
        name:string,
        surname:string,
        password:string
    }

    /** Props for AuthFormInput component */
    interface InputProps {
        id:string,
        label:string,
        type:string,
        setValue: React.Dispatch<string>
    }

}