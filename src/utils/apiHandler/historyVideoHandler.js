import axios from "axios"
import { GET_HISTORY_VIDEOS } from "../../reducer/video/videoListConstant"

const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: token,
  },
};

export const getHistoryVideos = async(dispatch) => {
    try {
        const response = await axios.get("/api/user/history", {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
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
        const response = await axios.post("/api/user/history", data, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
        dispatch({type: GET_HISTORY_VIDEOS, payload: response.data.history})
    } 
    catch(err) {
        console.log(err)
    }
}

export const deleteHistoryVideo = async(id, dispatch) => {
    try {
        const response = await axios.delete(`/api/user/history/${id}`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
        dispatch({type: GET_HISTORY_VIDEOS, payload: response.data.history})
    }
    catch(err) {
        console.log(err)
    }
}

export const deleteAllHistoryVideo = async(dispatch) => {
    try {
        const response = await axios.delete(`/api/user/history/all`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
        dispatch({type: GET_HISTORY_VIDEOS, payload: response.data.history})
    }
    catch(err) {
        console.log(err)
    }
}