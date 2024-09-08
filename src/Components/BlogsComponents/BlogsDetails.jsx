import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Heading from '../CommonComponents/Heading'
const BlogsDetails = () => {
    const {blogId} = useParams()
    const [blogdetails,setBlogDetails] = useState({})

    useEffect(() =>{
        let data = JSON.parse(localStorage.getItem('Blogs')) || []
        data.map((ele, index)=>{
            if(blogId == index)
            {
                setBlogDetails({...ele})
                return ele
            }
        })
    },[])


  return (
    <>
    <div className=' '>
        <Heading heading={`Blog : ${blogId}`} />
        <div className=' mt-5 bg-gray-100 border border-gray-100  p-4 h-full'>
          <div className='text-black text-5xl font-bold text-left '>{blogdetails.heading}</div>
          <div className='mt-2  text-sm font-semibold'>{blogdetails.time}</div>
          <img className='mt-5 mb-4  w-full h-96' src={blogdetails.img} />
          <div className='my-5 '> 
            <pre className='w-full text-gray-700 text-justify tracking-wide text-lg text-wrap'>{blogdetails.content}</pre></div>
          {/* <div className='flex-2 flex justify-end'>
            <Link to={`/blog/updated/${blogId}`}>
              <Button ButtonText="Update Blogs" />
            </Link>
          </div> */}
        </div>

      </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default BlogsDetails