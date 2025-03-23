import React from 'react'
import FeedHeading from './FeedHeading'
import "./../Style/feed.css"
import Post from './Post'

function Feed() {
  return (
    <div className='feed-content'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed