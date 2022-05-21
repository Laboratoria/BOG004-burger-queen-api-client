import User from "../../model/User";

export class UserApi {
    login(user){
        return new Promise(
            (resolve, reject)=>{
                if(user.email === "admin@gmail.com"){
                    resolve( new User() );
                }
                reject(new Error("Usuario o contraseña invalidos"));
            }
        );        
    }
}