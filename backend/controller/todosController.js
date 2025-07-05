'use server'
import {PrismaClient} from '../../lib/generated/prisma/client.js';
const prisma = new PrismaClient();


// Get All Todos
export const getTodos = async(_,res)=>{
    const todos = await prisma.todos.findMany()
    res.status(200).json(todos)
};

// Create a new Todos
export const createTodos = async(req,res)=>{
    try {
        const {title} = req.body
        const newTodo = await prisma.todos.create({
            data:{
                title
            }
            
        })
        res.status(201).json({
                message: "Successfully created a todo"
            })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error creating todo"
        });
    }
}