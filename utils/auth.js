import axios from "axios";

 const API_KEY = 'AIzaSyAuRthTodqYBJrj4MngxUSLYYFkvCDeJ_E';

 export async function createUser(){
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true,

        }

    )
}