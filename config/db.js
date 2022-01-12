const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.connect(db,
            {
                useNewUrlParser : true
            });
            console.log('connected to mongoDB');
    }catch(err){
        console.log('err in connecting to mongoDB is = ' + err);
        process.exit(1);
    }
};

module.exports = connectDB;