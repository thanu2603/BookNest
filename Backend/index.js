import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './router/book.route.js'
import cors from 'cors'
import userRoute from './router/user.route.js'


const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import bookRoute from './router/book.route.js'; // Added .js extension

// const app = express();

// dotenv.config();
// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// try {
//     await mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ", error);
// }

// app.use("/book", bookRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
