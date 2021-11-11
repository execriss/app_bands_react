import axios from "axios";
import { Auth } from "../types/Auth";

/**
 * user logic and password 
 */
class FakeAuth {

    /** fake user database */
    private static dbUrl = [
        {
          "id": 0,
          "username": "parishdavid101",
          "name": "Parrish",
          "surname": "David",
          "email": "parrishdavid@zialactic.com",
          "password": "pH83@as"
        },
        {
          "id": 1,
          "username": "Brianna55",
          "name": "Brianna",
          "surname": "Herrera",
          "email": "briannaherrera@zialactic.com",
          "password": "gp7asAS4"
        },
        {
          "id": 2,
          "username": "java1",
          "name": "Jacobs",
          "surname": "Vaughan",
          "email": "jacobsvaughan@zialactic.com",
          "password": "98HLoea"
        },
        {
          "id": 3,
          "username": "rathut",
          "name": "Ratliff",
          "surname": "Hutchinson",
          "email": "ratliffhutchinson@zialactic.com",
          "password": "psa8k3@"
        },
        {
          "id": 4,
          "username": "saramor99",
          "name": "Sarah",
          "surname": "Morton",
          "email": "sarahmorton@zialactic.com",
          "password": "apAKA%!A"
        },
        {
          "id": 5,
          "username": "opheliaaa",
          "name": "Ophelia",
          "surname": "Baldwin",
          "email": "opheliabaldwin@zialactic.com",
          "password": "oPtls31"
        },
        {
          "id": 6,
          "username": "calderonWigg33",
          "name": "Calderon",
          "surname": "Wiggins",
          "email": "calderonwiggins@zialactic.com",
          "password": "pg93%asA"
        },
        {
          "id": 7,
          "username": "lordot",
          "name": "Lorna",
          "surname": "Dotson",
          "email": "lornadotson@zialactic.com",
          "password": "50alsAI"
        },
        {
          "id": 8,
          "username": "whitney77",
          "name": "Neva",
          "surname": "Whitney",
          "email": "nevawhitney@zialactic.com",
          "password": "pasl933%"
        },
        {
          "id": 9,
          "username": "Joce101",
          "name": "Jocelyn",
          "surname": "Walters",
          "email": "jocelynwalters@zialactic.com",
          "password": "lya93Ta"
        }
      ];

    /**
     * Checks if an user exist in the database, return it's data if it exist or false if don't.
     */
    private static async userExist(username:string):Promise<boolean|Auth.User> {

        return this.dbUrl[0]

    }

    /**
     * Compare the user password input with the password stored in the database, return a boolean result.
     */
    private static comparePassword(input:string, password:string):boolean {

        if (input === password) return true;

        return false;

    }

    /**
     * Save the session data in local storage
     */
    private static saveSession() {

        localStorage.setItem("auth", "true");

    }

    /**
     * Change the session data value stored 
     */
    private static destrySession() {

        localStorage.setItem("auth", "false");
        
    }

    /**
     * checks the user and returns true if the user exists
     */
    public static async LogIn(username:string, password:string) {

        const user = await this.userExist(username);

        if (user) {
            
            if (this.comparePassword(password, (user as Auth.User).password)) {

                this.saveSession();
                return true;

            } else {
                return "Nombre de usuario o contraseña incorrectos.";
            }

        } else {
            return "El usuario no está registrado todavía.";
        }

    }

    /**
     * logout logic
     */
    public static logOut() {

        this.destrySession();

    }

}

export default FakeAuth;