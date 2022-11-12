export const createUser = (dataUser) => {
    ////url api
    const url = "http://localhost:3001/createUser";
    ///// parametros de la cabecera
    const params = {
        method: "POST",
        body: JSON.stringify(dataUser),
        Headers: {
          "Content-Type": "application/json",  
        },
    };

    return fetch(url,params)
    .then((res) => res.json())
    .then((result) => result )
    .catch((err) => "Error de servidor" + err.message);
};