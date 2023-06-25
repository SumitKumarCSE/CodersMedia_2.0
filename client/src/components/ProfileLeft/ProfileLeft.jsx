import React from 'react'
import TrendCard from '../TrendCard/TrendCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <TrendCard/>
    </div>
  )
}

export default ProfileLeft