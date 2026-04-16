import React from 'react';
import UseData from '../../hooks/UseData';
import Cards from './Cards';

const FriendCards = () => {
    const {friends} = UseData();
    console.log(friends)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-1 '>
            {friends.map(friend => <Cards key={friend.id} friend={friend}></Cards>)}
        </div>
    );
};

export default FriendCards;