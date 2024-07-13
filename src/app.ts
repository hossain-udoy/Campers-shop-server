import express, { Application } from "express";
import router from "./app/routes";
import cors from 'cors'


const app: Application = express();


// middlewares 
app.use(express.json())
app.use(cors())

// Application routes 
app.use('/api/v1',router)

export default app