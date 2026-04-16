import React from 'react';
import { useParams } from 'react-router';
import UseData from '../../../hooks/UseData';
import { PuffLoader } from 'react-spinners';

const Detailspage = () => {
   const {id} = useParams();
   const {friends, loading} = UseData();
   if(loading){
     return <div className='mt-3.5 flex justify-center'><PuffLoader /></div> 
   }
   const findFriend = friends.find(friend => friend.id == id);

   if (!findFriend) {
    return <p className="text-center mt-10">Friend not found</p>;
  }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='left'>
                <div className='flex flex-col justify-center items-center space-y-1 border border-gray-400 py-6 rounded-xl shadow'>
             <img className='w-[60px] h-[60px] rounded-full' src={findFriend.picture} alt="" />
             <h2 className='font-bold'>{findFriend.name}</h2>
             <p className='text-[#64748B]'>{findFriend.days_since_contact}d ago</p>
              
                <span className={`
                  ${findFriend.status === "overdue" && "bg-[#EF4444] px-3 rounded-full text-white"}
                  ${findFriend.status ==="almost due" && "bg-[#EFAD44] px-3 rounded-full text-white"}
                  ${findFriend.status ==="on-track" && "bg-[#00531e] px-3 rounded-full text-white"}
                   `}>
                   {findFriend.status}
                  </span>
             <div className='flex gap-2'>
                    {
                findFriend.tags.map(tag => <span className='bg-[#DBFCE7] px-3 rounded-full text-green-800'>{tag}</span>)
              }
                </div>
                <p className='text-xs text-center text-[#64748B]'>{findFriend.bio}</p>
                <p className='text-xs text-center text-[#64748B]'>Preferred: {findFriend.email}</p>

            </div>
            <div className='space-y-3 mt-3'>
                 <button className='btn btn-block bg-white'>Snooze 2 Weeks</button>
                 <button className='btn btn-block bg-white'>Archive</button>
                 <button className='btn btn-block bg-white text-red-500'>Delete</button>
            </div>
            </div>
            <div className='right'>

            </div>
        </div>
    );
};

export default Detailspage;