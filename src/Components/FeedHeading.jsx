import React from 'react'
import { useSelector } from 'react-redux'


function FeedHeading() {


  return (
    <div className='feed-heading-container'>
        <div className={`drag-icon-container `}><i className="bi bi-grip-vertical"></i></div>
        <div className='feed-name-container'>
            <p className='feed-type'>@pritishps</p>
            <p className='feed-name'>Home</p>
        </div>
        <div className='feed-heading-sttings'>
        <i className="bi bi-gear"></i>
        </div>
    </div>
  )
}

export default FeedHeading