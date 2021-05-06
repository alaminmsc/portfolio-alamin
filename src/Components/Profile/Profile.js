import { Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import './Profile.css';
import profile_image from '../../assets/images/alamin_mscit.jpg';
import CustomTimeline from '../Timeline/Timeline';
import ResumeData from '../../utilis/ResumeData';
import GetAppIcon from '@material-ui/icons/GetApp';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';







const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{ResumeData.name}</Typography>            
                <Typography className="title">{ResumeData.title}</Typography>
            </div> 

            <div className="profile_image">
                <img src={profile_image} alt=""/>
            </div>

            <div className="profile_information">
                <CustomTimeline icon={<PersonIcon></PersonIcon>} title={ResumeData.title}>
                </CustomTimeline>
                <button className="downloadBTN">Download CV</button>
            </div>
        </div>
    );
};

export default Profile;