import "./App.css";
import Header from "./components/Header";
import "./styles/index.css";
import { Router } from "./components/Routes";
import { useEffect } from "react";
import { useVideoList } from "./context/videoListContext";
import { getLikeVideos } from "./utils/apiHandler/likedVideoHandler";


function App() {
  const token = localStorage.getItem("token")
  const {dispatch} = useVideoList()
  useEffect(() => {
     getLikeVideos(dispatch) 
  }, [])
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
