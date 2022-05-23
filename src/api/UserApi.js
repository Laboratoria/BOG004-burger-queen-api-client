import User from "../model/User";

import axios from "axios";

export default class UserApi{

    baseURL = "http://localhost:8080/login";

    login(user){
        return axios.post(this.baseURL, user, {headers:{'Content-Type':'application/json'}})
            .then(
                (result)=>{
                    const apiUser = result.data.user;
                    apiUser.accessToken = result.data.accessToken;
                    return apiUser;                    
                }
            )
            .catch(
                (error)=>{
                    console.error("Unexpected error: "+error);
                    throw Error("Error en la consulta del API");
                }
            );          
    }

}