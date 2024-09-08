import React from 'react'
import SidebarLiItem from './SideBarLiItem'

const Sidebar = (props) => {
    
    return (
        <>
            <div className='m-0 w-80 h-full'>
               
                <aside id='default-sidebar'
                    className={`fixed left-0 z-40 w-64 h-screen transition-transform transform ${props.status ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                    aria-label="Sidebar">
                    <div className="h-full bg-gray-200 px-3 py-4 overflow-y-auto ">
                        <ul className="space-y-2 font-medium">
                            <SidebarLiItem />
                        </ul>
                    </div>

                </aside>
            </div>
        </>
    )
}

export default Sidebar
