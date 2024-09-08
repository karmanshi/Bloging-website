import React, { useEffect, useState } from 'react'
import Heading from '../CommonComponents/Heading'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddBlogs = () => {
  let navigate = useNavigate()
  const [addBlog, setAddBlog] = useState({})
  const [showBlog, setShowBlog] = useState([])

  const handleChange = (e) => {
    setAddBlog({ ...addBlog, [e.target.name]: e.target.value })
  }
  const checkValidation = (value, field) => {
    if (value == '') {
      toast.error(`${field} is required`)
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let resp1 = checkValidation(addBlog.heading, "Blog Heading")
    let resp2 = checkValidation(addBlog.img, "Image")
    let resp3 = checkValidation(addBlog.content, "Blog Content")
    let dateTime = new Date();
    dateTime = dateTime.toDateString()
    if (resp1 && resp2 && resp3  == true) {
      let data = { content: addBlog.content, heading: addBlog.heading, time: dateTime, img: addBlog.img }
      localStorage.setItem('Blogs', JSON.stringify([...showBlog, data]))
      toast.success('Blog Added sucessfully')
      navigate('/home/blogdetails')
      setShowBlog('')
    }


  }
  useEffect(() => {
    const blog = localStorage.getItem('Blogs');
    if (blog) {
      setShowBlog([...JSON.parse(blog)]); // Parse the array
    }
  },[])



  return (
    <>
      <div >
        <Heading heading="Write a Blogs" />
        <main className="w-full min-h-screen py-1 mt-3">
          <div className="w-full pb-8 ">

            <div className="grid ">

              <div className=" text-[#202142]">

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="heading"
                    className="block mb-2 text-sm font-medium text-indigo-900 "
                  >
                    Heading
                  </label>
                  <div class="relative">

                    <input
                      type='text'
                      id='heading'
                      name='heading'
                      value={addBlog.heading}
                      onChange={handleChange}

                      className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                      placeholder="Heading"
                    />
                  </div>

                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="img"
                    className="block mb-2 text-sm font-medium text-indigo-900 "
                  >
                    Image-URL
                  </label>
                  <div class="relative">

                    <input
                      type='text'
                      id='img'
                      name='img'
                      value={addBlog.img}
                      onChange={handleChange}

                      className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                      placeholder="Image-url"
                    />
                  </div>

                </div>


                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-indigo-900"
                  >
                    Content
                  </label>
                  <textarea
                    name='content'
                    id="content"
                    rows={13}
                    value={addBlog.content}
                    onChange={handleChange}
                    className=" bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder='Write a Blog......'

                  />
                </div>


              </div>
              <div className="flex justify-start">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center "
                >
                  Publish
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default AddBlogs