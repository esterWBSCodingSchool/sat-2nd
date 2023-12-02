const mongoose = require('mongoose');
require('dotenv').config();


const uri = process.env.ATLAS_URI;

const connectDB =  () => {
    mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB Atlas')
    })
    .catch((err) => {
        console.log('An error occurred', err)
    })

}

module.exports = connectDB
