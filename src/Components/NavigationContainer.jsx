import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "../Style/navigationcontainer.css"
import DeckList from './DeckList';

function NavigationContainer() {

    const theme = useSelector(state=>state.theme);
    const dispatch = useDispatch();


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
            <div className={`search-container`} onClick={()=>dispatch({action:"TOGGLE_SEARCH_PANEL"})}>
            <i className="bi bi-search"></i>
            <p>Search</p>
            </div>
        </div>
        <hr className='line' />
        <div className='deck-list-container'>
            <div className='deck-list-headings'>
                <p>Decks</p>
                <p className='new-deck-icon'>New Deck <i className="bi bi-file-plus"></i></p>
            </div>
            <DeckList/>
        </div>
        <div className={`navigation-conntainer-bottom-options ${theme}`}>
            <p className='dots-container'><i className="bi bi-three-dots"></i></p>
            <p>More</p>
        </div>
    </div>
  )
}

export default NavigationContainer