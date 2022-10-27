import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (<div>
        <ProfileInfo/>
        <MyPosts post={props.state.post}/>
    </div>);
}

export default Profile;