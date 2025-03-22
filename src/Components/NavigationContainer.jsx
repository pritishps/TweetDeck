import React from 'react'
import { useSelector } from 'react-redux'
import "../Style/navigationcontainer.css"

function NavigationContainer() {

    const theme = useSelector(state=>state.theme);

  return (
    <div className={`navigation-container ${theme}`}>
        <div className={`profile-info-display-container`}>
            <img className={`loggedin-user-profile-image`} src="images/profile-image/loggedin-user.png" alt="profile image" />
            <div className={`loggedin-user-account-headings`}>
                <h2>Pritish Prasant Sahooasdasdasdasdad</h2>
                <p>@pritishps</p>
            </div>
            <div className={`navigation-container-top-menu-option`}>...</div>
        </div>
        <hr className='line'/>
        <button className={`tweet-button ${theme}`}>Tweet</button>
        <div className='search-addcolumn-container'>
            <div className={`add-col-container`}>
            <i className="bi bi-file-plus"></i>
            <p>Add column</p>
            </div>
            <div className={`search-container`}>
            <i class="bi bi-search"></i>
            <p>Search</p>
            </div>
        </div>
    </div>
  )
}

export default NavigationContainer