import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div>
        <header className='w-full flex justify-between'>
            <div className='w-full bg-[#081621] py-4 text-white'>
                <div className='w-full flex flex-auto items-center px-4'>
                    <div className='flex w-11/12 justify-between items-center'>
                        <div className='pr-2'>
                            <img src="https://admin.sopmatech.com/assets/uploads/setting/logo/1705161862.jpeg" alt="Sopmatech" className='h-[52px]'/>
                        </div>
                        <div className='w-8/12 relative'>
                            <input type="text" className='w-full rounded-md py-2 text-gray-700 px-3 text-md' placeholder='Search product ...' />
                            <button className='top-0 right-0 absolute py-2 px-2 text-red-500'>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex justify-between px-3 items-center cursor-pointer'>
                                <div className='mr-2 text-red-500'>
                                    <FontAwesomeIcon icon={faGift} />
                                </div>
                                <div className='items-center'>
                                    <p className='m-0 leading-[0] pt-3 font-bold text-[12px]'>Offers</p>
                                    <small className='text-gray-400 text-[10px]'>Latest Offers</small>
                                </div>
                            </div>
                            <div className='flex justify-between px-3 items-center cursor-pointer'>
                                <div className='mr-2 text-red-500'>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className='items-center'>
                                    <p className='m-0 leading-[0] pt-3 font-bold text-[12px]'>Account</p>
                                    <small className='text-gray-400 text-[10px]'>
                                        <a href="" className='hover:text-red-500'>Register</a>
                                        <span className='px-1'>or</span>
                                        <a href="" className='hover:text-red-500'>Login</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-auto'>
                        <a href="/pc-builder" className="py-2 rounded-sm px-4 font-bold text-sm bg-gradient-to-r from-[#00237e] via-[#4958b8] to-[#abb6ff] bg-[length:400%_400%] animate-gradient">PC Builder</a>
                    </div>
                </div>
            </div>
        </header>
        <nav className='w-full bg-white shadow-md px-4 py-2'>
            <ul className='flex ml-auto'>
                <li className='px-1 py-1 mx-1 relative group text-md font-[600] hover:text-red-500'>
                    <a href="">Computers</a>
                    <ul className='absolute hidden left-0 top-8 group-hover:block bg-white w-[200px] py-1 text-black border-t-2 border-red-500 font-normal shadow-md'>
                        <li className='hover:bg-red-500 hover:text-white px-2'><a href="" className='block'>HP</a></li>
                        <li className='hover:bg-red-500 hover:text-white px-2'><a href="" className='block'>HP</a></li>
                        <li className='hover:bg-red-500 hover:text-white px-2'><a href="" className='block'>HP</a></li>
                    </ul>
                </li>
                <li className='px-1 py-1 mx-1 text-md font-[600] hover:text-red-500'>
                    <a href="">Desktops</a>
                </li>
                <li className='px-1 py-1 mx-1 text-md font-[600] hover:text-red-500'>
                    <a href="">Laptops</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header