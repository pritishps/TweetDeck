
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import NavigationContainer from "./Components/NavigationContainer";
import FeedContainer from "./Components/FeedContainer";
import DecksContainer from "./Components/DecksContainer";
function App() {


  const dispatch = useDispatch();
  const theme = useSelector(state=>state.theme);
  const toggleSearch = useSelector(state=>state.toggleSearch);
  console.log(toggleSearch)
  const switchTheme=()=>{
    dispatch({
      type:"TOGGLE_SEARCH"
    })
  }

  const [showNavigationContainer,setShowNavigationContainer] = useState(true);

  return (
    <div className={"app-container " +theme}>
      {
        showNavigationContainer &&
        <NavigationContainer/>
      }
      <DecksContainer deckName=""/>
      {/* <div>Some more text</div> */}
      {/* <FeedContainer/> */}
    </div>
  )
}

export default App
