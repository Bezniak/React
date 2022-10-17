import React from "react";
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (<div>
            <div>
                <img src="https://t3.ftcdn.net/jpg/04/03/02/94/360_F_403029413_x06ZMgwFARGsqQx1KydzJew5bzO5oxxc.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>)
}

export default ProfileInfo;