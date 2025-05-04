// BOOK STORAGES :- books, bookName, bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize,DataTypes) => {
    const Book = sequelize.define("book",{
        bookName : {
            type: DataTypes.STRING,
            allowNull : false
        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false 
        },
        bookAuthor : {
            type : DataTypes.STRING,
            allowNull : false,
            defaultValue : "Upekkha Rajkarnikar"
        },
        bookGenre : {
            type : DataTypes.STRING
        }
    }) 
    return Book
    
}

module.exports = bookModel // Ecma script :- export default bookModel