/* eslint-disable react/prop-types */
// import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className={` text-[#ffffff] font-bold text-4xl ${width}`}><span className="text-[#fd356e]">W</span>ebBlog</div>
  )
}

export default Logo