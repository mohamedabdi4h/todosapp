'use client'
import React, { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { Label } from "@/components/ui/label"
const Details = () => {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:3001/api/todos/all')
    setTodos(res.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <div className='m-auto justify-center flex items-center md:flex-row mt-44'>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className='text-3xl p-4 h-16 hover:bg-gray-600 hover:text-white duration-200 transition-all hover:duration-200 hover:transtion-all hover:cursor-pointer'>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>welcome to todos list</AlertDialogTitle>
            <AlertDialogDescription>
              {
                todos.map((todo) => (
                  <Label key={todo.id}>
                    <Label htmlFor="terms">
                      {todo.title}
                    </Label>
                  </Label>
                ))


              }
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Details