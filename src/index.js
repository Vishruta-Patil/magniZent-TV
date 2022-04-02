import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {VideoListProvider} from "./context/videoListContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoListProvider>
        <App />
      </VideoListProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
