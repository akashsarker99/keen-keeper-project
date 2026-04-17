import React, { useContext } from 'react';
import { FriendContext } from '../../shared/context/FriendContext';

const Timeline = () => {
    const {timeline} = useContext(FriendContext);


    return (
        <div className='w-10/12 mx-auto mt-10 space-y-2.5'>
           <h2 className='text-3xl font-bold'>Timeline</h2>
           <label className="select">
  <span className="label">Type</span>
  <select>
    <option>Personal</option>
    <option>Business</option>
  </select>
</label>

        {
            timeline.map(card => ( <div key={card.id}>
            <div className='shadow border border-gray-300 py-4 flex gap-4 items-center pl-4'>
                {card.action === 'call' && <img src="/call.png" alt="" />}
                {card.action === 'text' && <img src="/text.png" alt="" />}
                {card.action === 'video' && <img src="/video.png" alt="" />}
                
                <div>
                    <h2><span className='font-bold'>{card.action === 'call' && "Call"}
                        {card.action === 'text' && "Text"}
                        {card.action === 'video' && "Video"}
                        </span> with {card.findFriend.name}</h2>
                <p className='text-sm text-[#64748B]'>{card.findFriend.next_due_date}</p>
                </div>
            </div>
        </div>)              
             

        )
        }
        </div>
    );
};

export default Timeline;