// database book
const db = require("../config");
const {hash, compare, hashSync} = require("bcrypt");
const {createToken} = require("../middelware/Authentication");

class books{
    fetchBooks(req, res) {
        const query = `
        select bookID, bookTitle, category, bookURL
        from books;
        `

        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results,
            });
        });
    }
    fetchBook (req, res){
        const query = `
        select bookID,bookTitle,category, bookURl
        from books where bookID = ${req.params.id};`;
    db.query(query, (err, result) => {
      if (err)
        throw errres.json({
          status: res.statusCode,
          result,
        });
    });
    }

    updateBook(req, res) {
        const query = `
                update books
                set?
                where bookID =?`;
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
          res.json({
            staus: res.statusCode,
            msg: "The book has been updated🤌",
          });
        });
      }

      deleteBook(req, res) {
        const query = `
                delete from books
                where bookID =${req.params.id};
                `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The book has been updated",
          });
        });
      }

      
}
module.exports= books