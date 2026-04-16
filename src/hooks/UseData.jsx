import React, { useEffect, useState } from 'react';

const UseData = () => {
    
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       const fetchData = async () =>{
        const res = await fetch('/FriendData.json');
        const data = await res.json();
        setTimeout(() => {
            setFriends(data)
            setLoading(false)
        }, 500);
       }

       fetchData();
    },[])
 
    return {friends, loading}
};

export default UseData;