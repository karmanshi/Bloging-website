import React from 'react'

const Button = (props) => {
    return (
        <>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={props.onClick} >{props.ButtonText}</button>

        </>
    )
}

export default Button