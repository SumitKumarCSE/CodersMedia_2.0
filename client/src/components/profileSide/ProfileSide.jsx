import React from 'react'
import TrendCard from '../TrendCard/TrendCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard  location = 'homepage'/>
        <TrendCard/>
    </div>
    )
}

export default ProfileSide