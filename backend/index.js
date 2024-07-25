require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const serviceProviderRoutes = require("./routes/serviceProvider"); 
const authserviceProviderRoutes = require("./routes/authServiceProvider");



// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/serviceProvider", serviceProviderRoutes); 
app.use("/api/authServiceProvider",authserviceProviderRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));

/*
1. Loads environment variables to process.env from a .env file using dotenv.
2. Imports the Express module.
3. Creates an instance of an Express application, which you can then configure and start as your server.
4. Set up middleware:
    express.json(): Middleware to parse incoming JSON requests.
    cors(): Middleware to enable Cross-Origin Resource Sharing (CORS).
5. Sets the port from an environment variable or defaults to 8080.
6. Starts the server and listens on the specified port, logging a message when it’s running.
*/
