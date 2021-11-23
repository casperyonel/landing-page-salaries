require('dotenv').config()
const { CONNECTION_STRING } = process.env || 4444
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = { 
    updateWaitlist: (req, res) => {
    let { email } = req.body
    sequelize.query(`
    INSERT INTO waitlist (email)
    VALUES ('${email}');
    `).then(() => {
        res.sendStatus(200)
    }).catch(err => console.log(err))
    }
}