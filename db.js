const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/pals";

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;