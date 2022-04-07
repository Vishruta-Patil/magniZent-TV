import axios from "axios"
import { GET_HISTORY_VIDEOS } from "../../reducer/video/videoListConstant"

const encodedtoken = localStorage.getItem("token");
const config = {
  headers: {
    authorization: encodedtoken,
  },
};

export const getHistoryVideos = async(dispatch) => {
    try {
        const response = await axios.get("/api/user/history", config)
        dispatch({type: GET_HISTORY_VIDEOS, payload: response.data.history})
    }
    catch(err) {
        console.log(err)
    }
}

export const addToHistoryVideo = async(video, dispatch) => {
    const data = {
        video,
    }
    try {
        const response = await axios.post("/api/user/history", data, config)
        dispatch({type: GET_HISTORY_VIDEOS, payload: response.data.history})
    } 
    catch(err) {
        console.log(err)
    }
}

export const deleteHistoryVideo = async(id, dispatch) => {
    try {
        const response = await axios.delete(`/api/user/history/${id}`, config)
        dispatch({type: GET_HISTORY_VIDEOS, payload: response.data.history})
    }
    catch(err) {
        console.log(err)
    }
}

export const deleteAllHistoryVideo = async(dispatch) => {
    try {
        const response = await axios.delete(`/api/user/history/all`, config)
        dispatch({type: GET_HISTORY_VIDEOS, payload: response.data.history})
    }
    catch(err) {
        console.log(err)
    }
}