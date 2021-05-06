import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import profile_image from '../../assets/images/alamin_mscit.jpg';
import CustomTimeline from '../Timeline/Timeline';




const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">MD ALAMIN</Typography>
                <Typography className="title">JavaScript Developer</Typography>
            </div> 

            <div className="profile_image">
                <img src={profile_image} alt=""/>
            </div>

            <div className="profile_information">
                <CustomTimeline></CustomTimeline>

                <br/>
                <button>My Button</button>
            </div>
        </div>
    );
};

export default Profile;