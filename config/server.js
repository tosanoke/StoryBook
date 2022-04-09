const mongoose = require('mongoose')


// Connect Database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE);
        console.log(`mongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB