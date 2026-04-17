import React, { useContext } from 'react';
import { FriendContext } from '../shared/context/FriendContext';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {
    const {timeline} = useContext(FriendContext);

    const callCount = timeline.filter(item => item.action === 'call').length;
    const textCount = timeline.filter(item => item.action === 'text').length;
    const videoCount = timeline.filter(item => item.action === 'video').length;

    const data = [
  { name: 'Call', value: callCount, fill: '#0088FE' },
  { name: 'Text', value: textCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#FFBB28' },

];
    return (

        <div className='w-10/12 mx-auto p-10 mt-5'>
              <h2 className='text-2xl font-bold mb-5'>Friendship Analytics</h2>
             <div className='border border-gray-300 p-6 rounded-xl'>
                <h2 className='font-semibold mb-'>By Interaction Type</h2>
             
          {
                timeline.length === 0 ? <h2 className='text-center text-[#64748B]'>No Interactions logged Yet!</h2> : 
                  <div className='flex justify-center items-center'>
               <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Tooltip></Tooltip>
      <Legend></Legend>
    </PieChart>
            </div>
}
                  
            </div>
       
        </div>
    );
};

export default Stats;