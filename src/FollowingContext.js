import React, { createContext, useState } from 'react';
import {myData} from './usersData';

export const FollowingContext = createContext();

export function FollowingProvider(props){
    const [following, setFollowing] = useState(myData.following);
    
    return(
        <FollowingContext.Provider value={[following,setFollowing]}>
            {props.children}
        </FollowingContext.Provider>
    )
}