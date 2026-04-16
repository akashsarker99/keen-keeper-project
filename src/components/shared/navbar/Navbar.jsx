import React from 'react';
import { IoMdHome, IoMdTime } from 'react-icons/io';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
  const links = <>
          <li ><NavLink to='/' className={({isActive})=>`btn mr-3.5 ${isActive? "bg-[#244D3F] text-white" : "btn-ghost"}`}><IoMdHome />Home</NavLink></li>
      <li ><NavLink to='/timeline' className={({isActive})=>`btn mr-3.5 ${isActive? "bg-[#244D3F] text-white" : "btn-ghost"}`}><IoMdTime />Timeline</NavLink></li>
      <li ><NavLink to='/stats' className={({isActive})=>`btn mr-3.5 ${isActive? "bg-[#244D3F] text-white" : "btn-ghost"}`}><TfiStatsUp />Stats</NavLink></li>
  </>
    return (
       <div className="navbar bg-base-100 shadow-sm justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
     <h2 className="text-xl font-semibold"><span className='font-extrabold'>Keen</span>Keeper</h2>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
</div>
    );
};

export default Navbar;