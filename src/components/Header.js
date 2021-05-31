import React from 'react';
// import {myData} from '../usersData';
import Following from './Following';

function Header(){
    return (
        <div className="header-content">
            <div className="reload" onClick={()=> document.location.reload()}>users_like.me</div>
            <Following />
        </div>
    )
}

export default Header;