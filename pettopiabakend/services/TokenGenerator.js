const jwt = require('jsonwebtoken')
const privateKey = 'MisionTic2022'

//aqui se creara una funcion para generar el token y retornarlo
jwt.createAccessToken = ( user ) => {
    const { _id, firstname, lastname, email } = user
    // Este va a ser el objeto que se va a envolver con el token
    const payload = {
        id: _id,
        firstname: firstname,
        lastname: lastname,
        email: email
    }
    
    return jwt.sign( payload , privateKey , { expiresIn: '3h' } );
}

module.exports = jwt