const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')

dotenv.config({
    path: path.resolve(__dirname + '/config/config.env'),
  });

const db = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true });
    return connection
}

module.exports = db