import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { VideoListProvider } from "./context/videoListContext";
import { AuthProvider } from "./context/authContext";
import { WatchLaterProvider } from "./context/watchLaterContext";
import { HistoryProvider } from "./context/historyContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <WatchLaterProvider>
      <AuthProvider>
        <VideoListProvider>
          <HistoryProvider>
            <App />
          </HistoryProvider>
        </VideoListProvider>
      </AuthProvider>
      </WatchLaterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
