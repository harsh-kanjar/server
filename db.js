require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI || "mongodb+srv://harshkanjar07:bKqpBYVC9pR30yo8@cluster0.cg9ud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;
