/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#19191c] text-[#eeeef1] border-t-2 border-t-[#ffffff1f]">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-[#ededf029]">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full text-sm">
                            <h3 className="tracking-px mb-9  font-semibold uppercase text-[#97979b]">
                                Company
                            </h3>
                            <ul className='text-[#57575c] '>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full text-sm">
                            <h3 className="tracking-px mb-9  font-semibold uppercase text-[#97979b]">
                                Support
                            </h3>
                            <ul className='text-[#57575c] '>
                                <li className="mb-4 ">
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full text-sm">
                        <h3 className="tracking-px mb-9  font-semibold uppercase text-[#97979b]">
                                Legals
                            </h3>
                            <ul className='text-[#57575c] '>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium  hover:text-[#fd356e]"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer