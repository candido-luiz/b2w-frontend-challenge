import React from 'react';

function PersonalInfo({userInfo}){
    return(
        <div className="user-personalInfo">
            <div className="info-title">Personal Info</div>
            <div className="info">Born at: {userInfo.nat}</div>
            <div className="info">age: {userInfo.dob.age} years old</div>
            <div className="seeMore">see more</div>
        </div>
    )
}
export default PersonalInfo;