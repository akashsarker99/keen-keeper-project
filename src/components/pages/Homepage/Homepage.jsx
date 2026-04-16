import React from 'react';
import FriendCards from '../../friendcards/FriendCards';
import { FaPlus } from 'react-icons/fa';
import UseData from '../../../hooks/UseData';
import StaticCard from './staticCard/StaticCard';
import { PuffLoader } from 'react-spinners';

const Homepage = () => {
    const {loading} = UseData();
    return (
        <div className='mt-10'>
            <div className='bg-[#F8FAFC] text-center space-y-3'>
                <h2 className='text-3xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
<button className='btn bg-[#244D3F] text-white'><FaPlus />Add a Friend</button>
            </div>

            <div className='mb-10'>
               <StaticCard></StaticCard>
            </div>

          <div className='w-10/12 mx-auto'>
            <h2 className='text-xl font-semibold mb-3.5'>Your Friends</h2>
          {
            loading ? <div className='mt-3.5 flex justify-center'><PuffLoader /></div> : <FriendCards></FriendCards>
          }
          </div>
          
        </div>
    );
};

export default Homepage;