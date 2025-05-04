// database connection code/logic

//destructuring
const {Sequelize, DataTypes} = require("sequelize")

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

module.exports = db   