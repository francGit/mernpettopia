import Swal from 'sweetalert2' 
///puente a backend
///fetch
import { base_url, api_version } from "../constants/uriBase";
////function to create to user
export const userSingUp = (dataUser) => {
  ////url api create user
  const url_api = `${base_url}/${api_version}/createUser`

  ////params header http
  const params = {
    method: 'POST',
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json"
    }
  }
  
  return fetch(url_api, params)
          .then(res => res.json())
          .then(result => { 
            if(result.status){  
              Swal.fire(`${result.message}`);
              // console.log(result);
            }else{
              // console.log(result.message);
              Swal.fire(`${result.message}`);
            }
          })
          .catch(err => console.log(err.message));

}


////api loguin
export const userSignIn = (dataUser) => {
  const url = `${base_url}/${api_version}/login`;
  const requestInit = {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, requestInit)
  .then(res => res.json())
  .then( result => result )
  .catch(err => console.log(err)) //este result es el que va hacia  
};

///leer usuarios
export const getUser = () =>{
  const url = `${base_url}/${api_version}/getAllUsers`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url,params)
    .then((res) => res.json())
    .then((result) => {
      if(result) {
        const {users} = result
        return users;
      }else{
        return result.message;
      }
    })
    .catch((err) => "Error de servidor: " + err.message);

}