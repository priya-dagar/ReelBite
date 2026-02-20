const mongoose = require('mongoose');

console.log("MONGOOSE_URL:", process.env.MONGOOSE_URL);

function connectDB() {
    mongoose.connect(process.env.MONGOOSE_URL, )
        .then(() => {
            console.log('MongoDB Connected');
        })
        .catch((err) => {
            console.error('MongoDB connection Error', err);
        });
}

module.exports = connectDB;