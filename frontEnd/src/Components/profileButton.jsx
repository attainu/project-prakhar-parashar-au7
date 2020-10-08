import React from 'react'
import {Image} from 'cloudinary-react'
import { useSelector } from 'react-redux';
import './styles/profileButton.css'


const ProfileButton = (props) => {
    
    return (

        <button id="profileButton">
                        <div id="userInfo">
                  
                            <Image id="profilePic" publicId={props.user.profilePic} width="60" height="60"  cloudName="prakhar-parashar"/>
                             
                            <p id="userName">{props.user.userName}</p>
                        </div>
                    </button>

    )
}

export default ProfileButton;

