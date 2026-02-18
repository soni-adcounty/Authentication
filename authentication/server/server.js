import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js';
import customerRoutes from "./routes/customerRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


app.use(express.json());  

// Connect DB
connectDB();

// Routes 
app.get('/', (req, res) => res.send("API WORKING"));

app.use('/api/auth', authRouter);
app.use("/api/customer", customerRoutes);

// Server Start
app.listen(port, () => console.log(`Server started on port: ${port}`));


