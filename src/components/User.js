import React, { useEffect, useState } from 'react';
import data, { myData } from '../usersData';
import UserProfile from './UserProfile';
import PersonalInfo from './UserPersonalInfo';
import ContentInfo from './UserContentInfo';

import './User.css';

function User(){
    const [user, setUser] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [itsMe, setItsMe] = useState(true);

    async function fetchUser(){
        setIsLoaded(false);
        let randomUser = await data.randomUser();
        setUser(randomUser.results[0]);
        setIsLoaded(true);
    }

    useEffect(()=>{
        setUser(myData);
        setIsLoaded(true);
    },[]);

    const nextUser = ()=>{
        fetchUser();
        setItsMe(false);
    }
   
    if(isLoaded){
        return (
            <div className="user">
                <UserProfile userInfo={user} tryNext={nextUser} itsMe={itsMe} />
                <PersonalInfo userInfo={user} />
                <ContentInfo userInfo={user} />
            </div>
        )
    }else{
        return (<div>Carregando...</div>)
    }
    
}

export default User;