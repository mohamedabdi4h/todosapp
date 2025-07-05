'use client'
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const Posts = () => {
  const [posts,setPosts] = useState({
    title:''
  })
  const handleChange = (e)=>{
    setPosts({
      ...posts,[e.target.name]:e.target.value
    })
  }

  const handleSubmit  = async()=>{
    const res = await fetch('http://localhost:3001/api/todos/create',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(posts)
    })
    const data = await res.json()
    if(data.success){
      setPosts({
        title:''
      })
      alert('Post created successfully')
    }
  }
  return (
    <div className='flex  m-auto justify-center mt-32  flex-row-reverse  items-center gap-2 md:flex-row' >
     
<div className="textarea">
     <Textarea value={posts.title} onChange={handleChange} name="title" placeholder="Type your message here." className='w-96' />
</div>
<div className="btn">
            <Button onClick={handleSubmit} className='p-4 h-14'>Add</Button>
</div>
    </div>
  )
}

export default Posts