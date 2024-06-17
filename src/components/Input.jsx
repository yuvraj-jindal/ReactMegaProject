/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React,{ useId } from "react"


function Input({
    label,
    type = "text",
    placeholder = "Input",
    className = "",
    ...props
},ref) {
    const id = useId()
    return (
        <div className='w-full font-medium'>
            {label && <label className='inline-block mb-1 pl-1 text-[#6b6b70]' htmlFor={id}>{label}</label>}
            <input
            type={type}
            placeholder={placeholder}
            className={`px-3 py-2 rounded-lg bg-[#ffffff1a] text-black outline-none focus:bg-[#ffffff28] duration-200 border-[#ffffff1a] w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
}

export default React.forwardRef(Input)