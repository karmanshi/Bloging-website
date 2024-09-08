import React, { useEffect, useState } from 'react'
import SearchData from '../CommonComponents/SearchData'
import Button from '../CommonComponents/Button'
import Heading from '../CommonComponents/Heading'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {
  const [displayBlog, setDisplayBlog] = useState([])
  const [filterBlog, setFilterBlog] = useState([])

  const handleSearch = (e) =>{
    let val = e.target.value
    if(val == ''){
      setFilterBlog(displayBlog); return
    }
    let filterData = displayBlog.filter((ele) => {
      if(ele.heading.toLowerCase().includes(val.toLowerCase()))
      {
        return ele
      }
    }) 
    setFilterBlog(filterData)
    
  }

  const handleDelete = (id) =>{
    let deleteData = displayBlog.filter((items,index) =>{
      if(index != id){
        return items
      }
    })
    setFilterBlog([...deleteData])
    setDisplayBlog([...deleteData])
    toast.success("Blog deleted successful");
    localStorage.setItem('Blogs', JSON.stringify([...deleteData]))
  }

  
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('Blogs')) || []
    setDisplayBlog([...data])
    setFilterBlog([...data])
  },[])
  return (
    <>
      <div className='w-full'>
        <Heading heading="Blogs" />
        <div className='flex my-3.5'>
          <div className='flex-1 mb-2'>
            <SearchData onChange={handleSearch} searchValue="Search Blogs......" />
          </div>
          <div className='flex-2 flex justify-end'>
            <Link to="/blog/add">
              <Button ButtonText="Add Blogs" />
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10 mt-8'>
          {filterBlog.map((element, index) => {
            return <div className="bg-zinc-300 flex flex-col w-full max-h-90 min-h-90 p-0 bg-zinc-200	 hover:bg-gray-50	 max-w-md mx-auto rounded-lg hover:shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  hover:scale-110 " key={index + 1}>
              <img className='w-full h-32 rounded-t-lg' src={element.img} />
              <h1 className='px-6 mt-2 text-2xl font-semibold'>{element.heading}</h1>
              <p className="px-6 pt-2 flex-grow text-base text-gray-600 text-left tracking-wide  ">{element.content?.substring(0, 100)}....
              </p>

              <div className='p-6 flex mt-auto gap-4 flex-wrapq '>
                <div className='flex-1'>
                  <button type="button" className=" text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm py-2 px-2  text-center w-24 " onClick={() => handleDelete(index)}>Delete</button>
                </div>

                <div className='flex-1 flex justify-end'>
                  <Link to={`/blog/${index}`}>
                    <button type="button" className=" text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2 px-2  text-center w-24 " >Read More</button></Link>
                </div>
              </div>
            </div>
          })}</div>
      </div>

    </>
  )
}

export default Home