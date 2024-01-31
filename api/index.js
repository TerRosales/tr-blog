import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
// use for hiding DB info
import dotenv from 'dotenv'

dotenv.config();
// Database Setup
mongoose
    .connect(process.env.MONGO)
    .then(() => {
    console.log('MongoDB is Connected')
    })
    .catch(err => {
    console.log(err)
    });

// Server SetUp
const app = express();

app.listen(3000, () => {
    console.log('Server is running at Port: 3000')
})


app.use('/api/user', userRoutes
);