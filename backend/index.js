require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const connection= require("./config/db");
const userRoutes=require("./routes/users");
const authRoutes=require("./routes/auth");

//database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`Listening on port ${port}`))

/*
1. It loads environment variables to process.env from a .env file using dotenv.
2. It imports the Express module.
3. It creates an instance of an Express application, which you can then configure and start as your server.
4. Set up middleware
    express.json(): Middleware to parse incoming JSON requests.
    cors(): Middleware to enable Cross-Origin Resource Sharing (CORS).
        CORS (Cross-Origin Resource Sharing) is used to allow or restrict requested resources on a web server depending on where the HTTP request was initiated.
5. Sets the port from an environment variable or defaults to 8080.
6. Starts the server and listens on the specified port, logging a message when it’s running.
*/