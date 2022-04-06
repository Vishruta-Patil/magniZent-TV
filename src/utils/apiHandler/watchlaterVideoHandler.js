import axios from "axios"
import { GET_WATCHLATER_VIDEOS } from "../../reducer/video/videoListConstant"

const encodedtoken = localStorage.getItem("token");
const config = {
  headers: {
    authorization: encodedtoken,
  },
};

export const getWatchLaterVideos = async(dispatch) => {
    try {
        const response = await axios.get("/api/user/watchlater", config)
        dispatch({type: GET_WATCHLATER_VIDEOS, payload: response.data.watchlater})
    }
    catch(err) {
        console.log(err)
    }
}

export const addToWatchLaterVideo = async(video, dispatch) => {
    const data = {
        video,
    }
    try {
        const response = await axios.post("/api/user/watchlater", data, config)
        dispatch({type: GET_WATCHLATER_VIDEOS, payload: response.data.watchlater})
    } 
    catch(err) {
        console.log(err)
    }
}

export const deleteWatchLaterVideo = async(id, dispatch) => {
    try {
        const response = await axios.delete(`/api/user/watchlater/${id}`, config)
        dispatch({type: GET_WATCHLATER_VIDEOS, payload: response.data.watchlater})
    }
    catch(err) {
        console.log(err)
    }
}