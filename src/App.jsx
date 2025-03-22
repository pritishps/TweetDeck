
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import NavigationContainer from "./Components/NavigationContainer";
function App() {


  const dispatch = useDispatch();
  const theme = useSelector(state=>state.theme);
  const switchTheme=()=>{
    dispatch({
      type:"SWITCH_THEME"
    })
  }

  const [showNavigationContainer,setShowNavigationContainer] = useState(true);

  return (
    <div className={"app-container" +theme}>
      {
        showNavigationContainer &&
        <NavigationContainer/>
      }
    </div>
  )
}

export default App
