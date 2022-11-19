const username = 'framunet'
const pass = 'MdbFranc12*'
const dataBase = 'merntopia'
const stringConn = `mongodb+srv://${username}:${pass}@merntopia.eubrb8n.mongodb.net/${dataBase}?retryWrites=true&w=majority`

module.exports =  { stringConn } ;
// module.exports =  stringConn  ; //exportacion por defecto


