import React from 'react'
import { Link } from '@nextui-org/react';
import LogoColor from '@/assets/LogoColor';

const TopBar = ({className, options=[], optionGetLabel=(val)=>val, optionGetHref=(val)=>val}) => {
  return (
    <div className={className}>
      <div className="flex flex-row h-full w-full justify-center items-center font-bold ">
        <LogoColor className="w-12 h-12"/>
        SCIBLOG
      </div>
    </div>
  )
}

export default TopBar;