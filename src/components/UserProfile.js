import React, { useEffect, useState, useContext } from 'react';
import {myData} from '../usersData';
import {FollowingContext} from '../FollowingContext';

function UserProfile({userInfo, tryNext, itsMe}){
    const [followed, setFollowed] = useState(false);
    const [following, setFollowing] = useContext(FollowingContext);

    useEffect(()=>{
        if(myData.emailFollowing.includes(userInfo.email)){
            setFollowed(true);
        }
    }, [userInfo])

    function startFollow(){
        setFollowing([...following, userInfo]);
        myData.follow(userInfo, userInfo.email);
        setFollowed(true);
    }

    function unfollow(){
        let filteredFollowingList = following.filter((item)=> userInfo.email !== item.email);
        localStorage.setItem("followeds", JSON.stringify(filteredFollowingList));
        setFollowing(filteredFollowingList);
        setFollowed(false);
    }

    return(
        <div className="user-profile">
            <div className="profile-photo"><img src={userInfo.picture.large} alt="user"/></div>
            <div>
                
                {!itsMe? followed ?
                    <button className="btn following" onClick={unfollow}>Unfollow</button>:
                    <button className="btn follow" onClick={startFollow}>Follow</button>
                :
                    <></> 
                }
                <button className="btn tryNext" onClick={()=> tryNext()}>Try the next one</button>
            </div>
            <div className="profile-name">{userInfo.name.first} {userInfo.name.last}</div>
            <div className="profile-location">{userInfo.location.city}, {userInfo.location.country}</div>
        </div>
    )
}

export default UserProfile;