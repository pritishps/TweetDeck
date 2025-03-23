import React, { useState } from 'react'
import "../Style/post.css"

function Post() {
  const [liked,setLiked] = useState(true)


  const handleLike = ()=>{
    setLiked(prevLiked=>!prevLiked)
  }


  return (
    <div className={`post-container`}>
        <div className='post-image-container'>
            <img src="images/profile-image/loggedin-user.png" alt="user-image" />
        </div>
        <div className={`post-content`}>
            <div className={`post-headings`}>
                <h1 className='post-user-name'>Pritish Prasant Sahoo</h1>
                <p className='post-user-id'>@pritishps</p>
                <p className='post-time'>15h</p>
                <p className='post-options-icon'><i className="bi bi-three-dots"></i></p>
            </div>
            <p className={`post-text`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit deserunt aspernatur reiciendis itaque, aut consequatur quis! Eius ut optio assumenda asperiores ullam odio! Delectus, assumenda expedita quia temporibus possimus eaque facere mollitia! Dolor nihil assumenda consectetur aliquid tempore corporis magni!
            </p>
            <p className='reaction-container'>
              <p className='comment-button'><i className="bi bi-chat"></i>12</p>
              <p className='repost-button'><i className="bi bi-repeat"></i>16</p>
              { !liked && <p onClick={handleLike} className='like-button'><i className="bi bi-heart"></i>15</p>}
              { liked && <p onClick={handleLike} className='liked-button'><i className="bi bi-heart-fill"></i>15</p>}
              <p className='views-button'><i className="bi bi-bar-chart-fill"></i>35</p>
            </p>
        </div>
    </div>
  )
}

export default Post