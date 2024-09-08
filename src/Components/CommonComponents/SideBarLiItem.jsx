import React from 'react'
import {  NavLink } from 'react-router-dom'
import { data } from '../JSON/NavBarJSON'

const SidebarLiItem = () => {
    return (
        <>
              {data.map((ele)=>{return  <li>
                    <NavLink
                        to={ele.to}
                        className= {({ isActive }) =>
                            isActive
                              ? "flex items-center p-2 text-white bg-blue-500 rounded-lg "
                              : "flex items-center p-2 text-gray-900 rounded-lg"
                          }
                          
                    >
                         {ele.iconName()} 
                        
                        <span className="ms-3">{ele.name}</span>
                    </NavLink>
                </li>})}

  
        </>
    )
}

export default SidebarLiItem
