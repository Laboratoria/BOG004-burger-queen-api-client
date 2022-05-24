import User from "../model/User";

import axios from "axios";

export default class UserApi{

    baseURL = "http://localhost:8080/login";

    login(user){
        return axios.post(this.baseURL, user, {headers:{'Content-Type':'application/json'}})
            .then(
                (result)=>{
                    /**
                     * {
                     *   "accessToken": "the token",
                    *    "user": {
                    *      "email": "grace.hopper@systers.xyz",
                    *      "roles": {
                    *        "admin": true
                    *      },
                    *      "id": 2
                    *    }
                     * }
                     */
                    const apiUser = result.data.user;
                    apiUser.accessToken = result.data.accessToken;
                    return apiUser;                    
                }
            )
            .catch(
                (error)=>{
                    console.log("Unexpected error: "+error);
                    throw Error("Error en la consulta del API");
                }
            );          
    }

}