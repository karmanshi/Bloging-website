import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateBlog = () => {
    const { blogId } = useParams()
    const [updateBlog,setUpdateBlog] = useState({})


    const handleChange = (e) =>{
        setUpdateBlog({...updateBlog, [e.target.name] : e.targe.value})
    }

    const handleSubmit = (e) =>{
        e.preventdefault()
        
    }
    return (
        <>
            <div >
                <Heading heading="Update Blog" />
                <main className="w-full min-h-screen py-1 mt-3">
                    <div className="w-full pb-8 ">
                        <div className="grid ">
                            <div className=" text-[#202142]">
                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="heading"
                                        className="block mb-2 text-sm font-medium text-indigo-900"
                                    >
                                        Heading
                                    </label>
                                    <div class="relative">
                                        <input
                                            type='text'
                                            id='heading'
                                            name='heading'
                                            value={updateBlog.heading}
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
                                            value={updateBlog.img}
                                            onChange={handleChange}

                                            className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                                            placeholder="Image-url"
                                        />
                                    </div>
                                </div>

                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="content"
                                        className="block mb-2 text-sm font-medium text-indigo-900 "
                                    >
                                        Content
                                    </label>
                                    <textarea
                                        name='content'
                                        id="content"
                                        rows={13}
                                        value={updateBlog.content}
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
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


        </>
    )
}

export default UpdateBlog