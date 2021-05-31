import React, { useContext } from 'react';
import {FollowingContext} from '../FollowingContext';

import './FollowedUser.css';

function FollowedUser({ user }){

    const [following, setFollowing] = useContext(FollowingContext);
    
    function unfollow(){
        let filteredFollowingList = following.filter((item)=> user.email !== item.email);
        localStorage.setItem("followeds", JSON.stringify(filteredFollowingList));
        setFollowing(filteredFollowingList);
    }

    return(
        <div className='following-list-item'>
            <div className='followed-user'>
                <img className='followed-img' alt='' src={user.picture.thumbnail}></img>
            
                <div className='followed-info'>
                    <div className='followed-info-name'>{user.name.first} {user.name.last}</div>
                    <div className='followed-info-location'>{user.location.city}, {user.location.country}</div>
                </div>
            </div>
            <div className='unfollow'>
                <button className='unfollow-btn' onClick={unfollow}>Unfollow</button>
            </div>
        </div>
    )
}
export default FollowedUser;