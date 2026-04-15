import React from 'react';
import { IoMdHome, IoMdTime } from 'react-icons/io';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <h2 className="text-xl font-semibold"><span className='font-extrabold'>Keen</span>Keeper</h2>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li ><NavLink to='/' className={({isActive})=>`btn mr-3.5 ${isActive? "bg-[#244D3F] text-white" : "btn-ghost"}`}><IoMdHome />Home</NavLink></li>
      <li ><NavLink to='/timeline' className={({isActive})=>`btn mr-3.5 ${isActive? "bg-[#244D3F] text-white" : "btn-ghost"}`}><IoMdTime />Timeline</NavLink></li>
      <li ><NavLink to='/stats' className={({isActive})=>`btn mr-3.5 ${isActive? "bg-[#244D3F] text-white" : "btn-ghost"}`}><TfiStatsUp />Stats</NavLink></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;