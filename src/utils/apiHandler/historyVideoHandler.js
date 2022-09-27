import axios from "axios"
import { ADD_TO_HISTORY_VIDEOS, GET_HISTORY_VIDEOS, REMOVE_FROM_HISTORY_VIDEOS } from "../../reducer/history/historyConstant";

export const getHistoryVideos = async(dispatch) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/history`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        dispatch({type: GET_HISTORY_VIDEOS, payload: response.data.history})
    }
    catch(err) {
        console.log(err?.response?.data?.message)
    }
}

export const addToHistoryVideo = async(videoId, dispatch) => {
    const data = {
      videoId,
    }
    try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/history`,
          data,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        dispatch({type: ADD_TO_HISTORY_VIDEOS, payload: response.data.history})
    } 
    catch(err) {
        console.log(err?.response?.data?.message)
    }
}

export const deleteHistoryVideo = async(videoId, dispatch) => {
    try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_ENDPOINT}/history/${videoId}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        dispatch({type: REMOVE_FROM_HISTORY_VIDEOS, payload: videoId})
    }
    catch(err) {
        console.log(err)
    }
}

export const deleteAllHistoryVideo = async(dispatch) => {
    try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_ENDPOINT}/history`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        dispatch({type: GET_HISTORY_VIDEOS, payload: []})
    }
    catch(err) {
        console.log(err)
    }
}