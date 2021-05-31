import React from 'react';
import Following from './Following';

import './Header.css'

function Header(){
    return (
        <div className="header-content">
            <div className="reload" onClick={()=> document.location.reload()}>users_like.me</div>
            <Following />
        </div>
    )
}

export default Header;