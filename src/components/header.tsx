import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { Input } from './ui/input'

const Header = () => {
  return (
    <>
    <header>
    <div className='w-full h-[38px] bg-black px-[135px]  flex pl-[445px] pr-[136px] text-white items-center '>
            <div className='flex w-[859px] justify-between items-center  '>
         <div className='flex gap-2'>
         <span className='text-[14px] leading-[18.9px]'>
         Sign up and get 20% off to your first order. 
         </span>
         <Link href={"/"} className='hover:underline '>Sign Up Now</Link>
         </div>
            

{/* dropdown */}
<div className='flex '>
    
<RxCross2 />
</div>
    </div>
      </div>


      {/* buttom */}
<div className='pb-[31px] pt-[24px] '>
  
<div className=" md:max-w-full md:h-[48px] md:ml-[100px]  flex items-center gap-5 justify-between  bg-white  md:mx-16 text-black ">
        {/* Logo */}
        <div className="flex gap-5 ml-4">
        <p className="md:hidden">&#9776;</p>
        <h1 className="text-[25.2px] md:text-5xl font-extrabold leading-[30.24px] md:leading-[38.4px] font-integral-extra">
          SHOP.CO
        </h1>
        </div>

        {/* Navigation Menu */}
        <div className="  md:flex items-center md:justify-between gap-[24px] font-satoshi ">
          <ul className=" hidden md:text-[16px] font-normal leading-[21.6px] md:flex items-center gap-6">
            <li className="flex items-center font-satoshi">
              Shop
              <IoIosArrowDown className="ml-1" />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
          {/*  search div */}

          <div className="flex items-center justify-between ">
          <div className="md:w-[577px] h-[45px] rounded-[62px] py-1 px-4 bg-[#F0F0F0] flex gap-2 items-center">
    <IoIosSearch className="w-5 h-5" />
    <Input
        type="text"
        placeholder="Search for products..."
        className="hidden md:inline-block md:text-base font-normal leading-[21.5px] text-black  rounded-full w-full border-none px-2" // Added px-2 for padding adjustment
    />
</div>

            {/* cart logo div */}

            <div className=" w-[62px] h-[24px] ml-5 flex items-center justify-between relative">
              <FiShoppingCart className="w-5 h-5" />
              <FaRegUserCircle className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
</div>

    </header>
    </>
  )
}

export default Header
