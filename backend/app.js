'use server'
import express from 'express';
const app = express();
const port = 3001;
import cors from 'cors';
app.use(cors());
app.use(express.json());


import todosRoute from './routes/todosRoute.js';
app.use('/api/todos/',todosRoute);
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})