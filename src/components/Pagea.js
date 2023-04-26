import React from 'react'
import './pagea.css'
import Cards from './Cards'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'



function Pagea() {
  return (
    <>
    <div className='w-full flex flex-col px-4 lg:px-0'>
    <div className='relative lg:top-0 top-5 lg:rounded-[0px] rounded-full w-full h-14 lg:h-[90px] flex justify-between bg-green-500 lg:bg-slate-200 text-white lg:bg-opacity-20 z-10'>
      <Navbar/>
      
    </div>
    <div className='pic text-align-center w-full mt-[-90px] hidden lg:block'>
      <div className='overlay absolute py-[20%] px-6'>
      <div className='font-[700] text-[60px] text-center'>Transforming Agriculture with Technology</div>
      <div className='font-[700] text-[26px] text-slate-200 text-center'>Revolutionizing Agriculture through Innovation: Explore the Latest Trends and Technologies in Agri-Tech with Ouranos Robotics' Leading Blog</div>
      </div>
    </div>
  </div>
  <div className='absolute'>
  <div className=' lg:flex md:px-6 justify-around w-full'>
      <div className='  lg:flex flex-col lg:w-1/3 p-4 md:ml-6'>
        <div className='pt-6 px-2 md:px-0 '>
          <input type="text" className="rounded-[10px] border-2 w-[380px] md:w-full px-2 h-[32px] md:h-[53px] md:font-semibold md:text-lg" placeholder='Search' />
          
        </div>
        <div className='lg:block hidden rounded-[12px] border-2 shadow-xl p-[20px]'>
          <div className='font-[700] px-6 text-[28px] pt-2'>Categories</div>
          <div className='px-6 py-6'>
            <div className='border-b-[1px] cursor-pointer hover:font-semibold py-[8px]'>Automation</div>
            <div className='border-b-[1px] cursor-pointer hover:font-semibold py-[8px]'>IoT</div>
            <div className='border-b-[1px] cursor-pointer hover:font-semibold py-[8px]'>Precison Agriculture</div>
            <div className='border-b-[1px] cursor-pointer hover:font-semibold py-[8px]'>Sustainable Farming</div>
            <div className='border-b-[1px] cursor-pointer hover:font-semibold py-[8px]'>Industry News</div>
            <div className='border-b-[1px] cursor-pointer hover:font-semibold py-[8px]'>Case Studies</div>
            <div className='cursor-pointer hover:font-semibold py-[8px]'>Tips & Tricks</div>
          </div>
        </div>
        <div className='hidden lg:block py-4 shadow-lg border-[2px] p-[20px] my-4 rounded-[12px]'>
          <div className='font-semibold text-2xl'>Top Posts</div>
          <div className='flex py-3'>
            <div className='font-[700] text-[36px] px-[23px]'>1</div>
            <div className='flex flex-col'>
              <div>How Regenerative Agriculture is Changing the Game</div>
              <div className='text-slate-400 text-[12px] font-[400]'>Sustainable Farming - March, 2022</div>
            </div>
          </div>
          <div className='flex py-3'>
            <div className='font-[700] text-[36px] px-[23px]'>2</div>
            <div className='flex flex-col'>
              <div>How Regenerative Agriculture is Changing the Game</div>
              <div className='text-slate-400 text-[12px] font-[400]'>Sustainable Farming - March, 2022</div>
            </div>
          </div>
          <div className='flex py-3'>
            <div className='font-[700] text-[36px] px-[23px]'>3</div>
            <div className='flex flex-col'>
              <div>How Regenerative Agriculture is Changing the Game</div>
              <div className='text-slate-400 text-[12px] font-[400]'>Sustainable Farming - March, 2022</div>
            </div>
          </div>
          <div className='flex py-3'>
            <div className='font-[700] text-[36px] px-[23px]'>4</div>
            <div className='flex flex-col'>
              <div>How Regenerative Agriculture is Changing the Game</div>
              <div className='text-slate-400 text-[12px] font-[400]'>Sustainable Farming - March, 2022</div>
            </div>
          </div>
          <div className='flex py-3'>
            <div className='font-[700] text-[36px] px-[23px]'>5</div>
            <div className='flex flex-col'>
              <div>How Regenerative Agriculture is Changing the Game</div>
              <div className='text-slate-400 text-[12px] font-[400]'>Sustainable Farming - March, 2022</div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:m-6 w-2/3 mx-3'>
        <div className='lg:flex'>
          <NavLink to="/b">
            <Cards/>
          </NavLink>
          <NavLink to="/b">
            <Cards/>
          </NavLink>
        </div>
        <div className='lg:flex'>
        <NavLink to="/b">
            <Cards/>
          </NavLink>
          <NavLink to="/b">
            <Cards/>
          </NavLink>
        </div>
        <div className='lg:flex'>
        <NavLink to="/b">
            <Cards/>
          </NavLink>
          <NavLink to="/b">
            <Cards/>
          </NavLink>
        </div>
      </div>
      
    </div>

    <div className=' flex w-full justify-center  align-center'>
        <div className='border-[1px] border-slate-900 p-2 px-4 font-semibold m-2 bg-green-500 cursor-pointer'>1</div>
        <div className='border-[1px] border-slate-900 p-2 px-4 font-semibold m-2 cursor-pointer hover:bg-green-500'>2</div>
        <div className='border-[1px] border-slate-900 p-2 px-4 font-semibold m-2 cursor-pointer hover:bg-green-500'>3</div>
        <div className='border-[1px] border-slate-900 p-2 px-4 font-semibold m-2 cursor-pointer hover:bg-green-500'>4</div>
        <div className='border-[1px] border-slate-900 p-2 px-4 font-semibold m-2 cursor-pointer hover:bg-green-500'>&gt;</div>
    </div>
    </div>
    </>
  )
}

export default Pagea
