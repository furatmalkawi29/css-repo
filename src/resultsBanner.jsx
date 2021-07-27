import React from 'react'
import './reqBanner.css'
import { Icon } from '@iconify/react';
import slidersV from '@iconify-icons/uil/sliders-v';
import './resultsBanner.css'

export default function ResultsBanner(props) {
  return (
<div className="mycontainer mycontainer2">
<div className="head">
  <p> Search Results </p>
  <div className="circle-icon setting-icon" > 
  <Icon icon={slidersV} /> 
  </div>
  </div>

<div className="requests-sec">
{props.children}

    </div>

        </div>
  )
}
