import React, { useContext, useState } from 'react';
import {FollowingContext} from '../FollowingContext';
import FollowingList from './FollowingList';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

import './Following.css';

function Following(){
    const [following, ] = useContext(FollowingContext);
    const [showList, setShowList] = useState(false);

    function toggleList(){
        if(!showList){
            setShowList(true);
        }else{
            setShowList(false);
        }
    }
    return (
        <div className={`dropdown ${showList ? following.length > 0?'dropdown-clicked':'':''}`}>
            {following.length > 0?
                <div className='dropdown-btn' onClick={toggleList}>following {following.length} users 
                    {showList?<IoIosArrowUp/>: <IoIosArrowDown />}</div>
                :
                <></>
            }
            {showList? <FollowingList users={following} />: <></>}
            
        </div>
    )
}
export default Following;