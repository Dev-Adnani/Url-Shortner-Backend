import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import { urlrouter } from './routes/app.router';
import cors from 'cors';


dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 5555;
app.set("port", port);
let mongodb_url = process.env.MONGODB_URL as string;


app.use(urlrouter);

mongoose.connect(
    mongodb_url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log(`Database is connected`);
    }
  );

app.listen(port,() => {
    console.log(` 🚀 Is Rocking At ${port}`)
   
});
