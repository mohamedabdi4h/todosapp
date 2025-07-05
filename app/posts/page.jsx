import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const Posts = () => {
  return (
    <div className='flex  m-auto justify-center mt-32  flex-row-reverse  items-center gap-2 md:flex-row' >
     
<div className="textarea">
     <Textarea placeholder="Type your message here." className='w-96' />
</div>
<div className="btn">
            <Button className='p-4 h-14'>Button</Button>
</div>
    </div>
  )
}

export default Posts