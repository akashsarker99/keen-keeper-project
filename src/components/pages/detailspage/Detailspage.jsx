import React, { useContext } from 'react';
import { useParams } from 'react-router';
import UseData from '../../../hooks/UseData';
import { PuffLoader } from 'react-spinners';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { FriendContext } from '../../shared/context/FriendContext';
const Detailspage = () => {
   const {id} = useParams();
   const {friends, loading} = UseData();
   const {handleCheckIn} = useContext(FriendContext);
   if(loading){
     return <div className='mt-3.5 flex justify-center'><PuffLoader /></div> 
   }
   const findFriend = friends.find(friend => friend.id == id);

   if (!findFriend) {
    return <p className="text-center mt-10">Friend not found</p>;
  }
    return (
       <div className='w-10/12 mx-auto'>
         <div className='grid grid-cols-1 sm:grid-cols-2 mt-7 gap-8'>
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
                   {findFriend.status === "overdue" && "Overdue"}
                   {findFriend.status === "almost due" && "Almost Due"}
                   {findFriend.status === "on-track" && "On Track"}
                  </span>
             <div className='flex gap-2'>
                    {
                findFriend.tags.map(tag => <span className='bg-[#DBFCE7] text-sm px-3 rounded-full text-green-800'>{tag.toUpperCase()}</span>)
              }
                </div>
                <p className='text-xs text-center text-[#64748B] px-3'>{findFriend.bio}</p>
                <p className='text-xs text-center text-[#64748B]'>Preferred: {findFriend.email}</p>

            </div>
            <div className='space-y-3 mt-3'>
                 <button className='btn btn-block bg-white'>Snooze 2 Weeks</button>
                 <button className='btn btn-block bg-white'>Archive</button>
                 <button className='btn btn-block bg-white text-red-500'>Delete</button>
            </div>
            </div>
            <div className='right'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
             <div className='bg-white text-center shadow-md border border-gray-400 py-7 rounded-xl'>
                <h2 className='font-bold'>{findFriend.days_since_contact}</h2>
                <p className='text-[#64748B]'>Days since contact</p>
             </div>
             <div className='bg-white text-center shadow-md border border-gray-400 py-7 rounded-xl'>
                <h2 className='font-bold'>{findFriend.goal}</h2>
                <p className='text-[#64748B]'>Goal (Days)</p>
             </div>
             <div className='bg-white text-center shadow-md border border-gray-400 py-7 rounded-xl'>
                <h2 className='font-semibold'>{findFriend.next_due_date}</h2>
                <p className='text-[#64748B]'>Next Due</p>
             </div>
             <div className='bg-white shadow-md border border-gray-400 py-7 px-5 flex flex-col lg:flex-row gap-2 sm:justify-between lg:col-span-3 rounded-xl'>
                <div>
                  <h2 className='font-semibold'>Relationship Goal</h2>
                <p className='text-[#64748B]'>Contact every <span className='font-bold text-black'>{findFriend.goal}  days</span></p>
                </div>
                <button className='btn'>Edit</button>
             </div>

             <div className='bg-white shadow-md border border-gray-400 p-5 sm:col-span-2 lg:col-span-3 rounded-xl'>
              <h2 className='font-semibold mb-3'>Quick Check-In</h2>
                <div className='flex flex-col justify-center gap-4 sm:flex-wrap lg:flex-row'>
                   <button onClick={()=> handleCheckIn('call', findFriend)} className='btn md:btn-xl'>
                  <BiPhoneCall className='text-xl' />
                   <p className='font-bold'>Call</p>
               </button>
               <button  onClick={()=> handleCheckIn('text', findFriend)} className='btn md:btn-xl'>
                  <MdOutlineTextsms className='text-xl' />
                   <p className='font-bold'>Text</p>
               </button>
               <button onClick={()=> handleCheckIn('video', findFriend)} className='btn md:btn-xl'>
                  <MdOutlineVideocam className='text-xl' />
                   <p className='font-bold'>Video</p>
               </button>
                </div>
             </div>
        </div>
            </div>
        </div>

       </div>
    );
};

export default Detailspage;