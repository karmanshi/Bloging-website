import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import BannerLogo from '../CommonComponents/BannerLogo'
import Sidebar from '../CommonComponents/SideBar'
import { useState } from 'react'


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
      <nav className="sticky top-0 z-10 bg-black  border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto">
          <button
            onClick={toggleSidebar}
            type="button"
            className="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100"
          >
            {/* <span className="sr-only">Open sidebar</span> */}
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              />
            </svg>
          </button>

          <Link
            className="flex items-center"
          >
            <BannerLogo />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">
              Bloging
            </span>
          </Link>
        </div>

      </nav>
      <div className='flex'>
        <Sidebar status={isOpen}/>
        <div className='w-full m-5 p-4  '>
          <Outlet />
        </div>
      </div>



    </>

  )
}

export default Navigation