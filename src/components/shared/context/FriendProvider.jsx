import { useState } from 'react';
import { FriendContext } from './FriendContext';
import { toast } from 'react-toastify';

const FriendProvider = ({children}) => {

    const [timeline, setTimeline] = useState([]);

    const handleCheckIn = (btn, findFriend) =>{
         

        setTimeline([...timeline, {findFriend, action: btn}]);
        toast.success(`${btn.toUpperCase()} with ${findFriend.name}`, {
            position: "top-center",
        })
    }

    const data = {
        timeline,
        setTimeline,
        handleCheckIn,
    }

    return (
       <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};

export default FriendProvider;