//import all models
const users =require('./user')
const orders =require('./orders')
const books =require('./books')
const bookAuthor =require('./bookAuthors')

//export all objects
module.exports= {
    users: new users(),
    oerders: new orders(),
    books: new books(),
    bookAuthor: new bookAuthor()
}