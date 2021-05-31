import React from 'react';
import FollowedUser from './FollowedUser';

import './FollowingList.css';

function FollowingList({users}){
    return(
        <ul className="following-list">
            {users.map((user)=>{
                return (<li key={user.login.uuid}>
                            <FollowedUser user={user}/>
                        </li>)
            })}
        </ul>
    )
}

export default FollowingList;