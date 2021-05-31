import React from 'react';

function ContentInfo({userInfo}){
    return(
        <div className="user-contentInfo">
            <div className="info-title">Contact Info</div>
            <div className="info">Email: {userInfo.email}</div>
            <div className="info">Phone: {userInfo.phone}</div>
            <div className="seeMore">see more</div>
        </div>
    )
}
export default ContentInfo;