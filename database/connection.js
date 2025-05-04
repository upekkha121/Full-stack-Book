// database connection code/logic

//destructuring
const {Sequelize, DataTypes} = require("sequelize")
const bookModel = require("./models/book.model")
const userModel = require("./models/user.model")
const productModel = require("./models/product.model")
//another way
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.yfidfmzhhmlezonhpaea:ahk2ep121601@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticate vayo, connected !!")
})
.catch((err)=>{
     console.log("Error" + err)
})


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.products = productModel(sequelize,DataTypes);
db.users = userModel(sequelize, DataTypes);
db.books = bookModel(sequelize, DataTypes);
        // require("./models/book.model")() -- another way

//migrate code for database table to be seen in supabase platform
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vayo hai.")
})

module.exports = db   

