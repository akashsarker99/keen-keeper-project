import React from 'react';
import { Link, NavLink } from 'react-router';

const Cards = ({friend}) => {
    return (
        <div>
            <Link to={`/friends/${friend.id}`}>
             <div className='flex flex-col justify-center items-center space-y-1 border border-gray-400 py-6 rounded-xl shadow'>
             <img className='w-[60px] h-[60px] rounded-full' src={friend.picture} alt="" />
             <h2 className='font-bold'>{friend.name}</h2>
             <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>
              
                <div className='flex gap-2'>
                    {
                friend.tags.map(tag => <span className='bg-[#DBFCE7] px-3 rounded-full text-green-800'>{tag}</span>)
              }
                </div>

              <span className={`
                  ${friend.status === "overdue" && "bg-[#EF4444] px-3 rounded-full text-white"}
                  ${friend.status ==="almost due" && "bg-[#EFAD44] px-3 rounded-full text-white"}
                  ${friend.status ==="on-track" && "bg-[#00531e] px-3 rounded-full text-white"}
                   `}>
                   {friend.status}
                  </span>
            </div>
            </Link>
           
        </div>
    );
};

export default Cards;