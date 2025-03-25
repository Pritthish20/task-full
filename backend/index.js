import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";


//flies
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js'


//configuration
dotenv.config();
connectDB();

const app=express();



//middleware

app.use(cors({
      origin: ["http://localhost:5173",], 
      credentials: true,
    }));
 

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.get("/", (req, res) => {
  res.send("server is up!!!");
});



const port=process.env.PORT || 3000;
//console.log(process.env.PORT);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

//routes

app.use("/api/v1/tasks",taskRoutes);


app.listen(port,()=>console.log(`server listening on port ${port}`));