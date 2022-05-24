import User from "../../model/User";

export class UserApi {
    login(user){
        return new Promise(
            (resolve, reject)=>{
                if(user.email === "admin@gmail.com"){
                    let user = new User();
                    user.email = "admin@gmail.com";
                    user.id = "1";
                    user.roles = {
                        "admin": true
                    };
                    resolve( user );
                }
                reject(new Error("Usuario o contraseña invalidos"));
            }
        );        
    }
}