import {createStore} from 'redux';

const initialState = {
    theme:"",
    // theme:"dark",
    searchPanel:false,
    newTweetPanel:false,
    decks:[
        {
            deckName:'Main',
            deckFeeds:[
                {
                    feedName:"Home",
                },
                {
                    feedName:"Folowings"
                }
                
            ]
        },
        {
            deckName:'My Deck',
            deckFeeds:[
                {
                    feedName:"Liked",
                },
                {
                    feedName:"Folowings"
                }
                
            ]
            
        }
    ]

}

const reducers  = (state = initialState,action)=>{
    switch(action?.type){
        case "SWITCH_THEME":
            if (state?.theme==="") return {...state,theme:"dark"};
            return {...state,theme:""};
        
        case "TOGGLE_SEARCH_PANEL":
            return {...state,searchPanel:!state?.searchPanel}

        case "TOGGLE_NEW_TWEET_PANEL":
            return {...state,searchPanel:!state?.searchPanel}
        
        
        default : return state
    }
}

export const store = createStore(reducers)