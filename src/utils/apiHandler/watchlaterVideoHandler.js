import axios from "axios"
import { ADD_TO_WATCHLATER_VIDEOS, GET_WATCHLATER_VIDEOS, REMOVE_FROM_WATCHLATER_VIDEOS } from "../../reducer/watchLater/watchLaterContant";

const token = localStorage.getItem("token");

export const getWatchLaterVideos = async(dispatch) => {
    try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}/watchlater`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        dispatch({type: GET_WATCHLATER_VIDEOS, payload: response.data.watchLater})
    }
    catch(err) {
        console.log(err || err?.response?.data?.message)
    }
}

export const addToWatchLaterVideo = async(videoId, dispatch, navigate) => {
    const data = {
      videoId,
    }
    try {
      if(!localStorage.getItem("token")) {
        navigate("/login")
      }
        const response = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/watchlater`,
          data,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        dispatch({type: ADD_TO_WATCHLATER_VIDEOS, payload: response.data.watchLater})
    } 
    catch(err) {
        console.log(err || err?.response?.data?.message)
    }
}

export const deleteWatchLaterVideo = async(id, dispatch, navigate) => {
    try {
      if(!localStorage.getItem("token")) {
        navigate("/login")
      }
        const response = await axios.delete(
          `${process.env.REACT_APP_API_ENDPOINT}/watchlater/${id}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        dispatch({type: REMOVE_FROM_WATCHLATER_VIDEOS, payload: id})
    }
    catch(err) {
        console.log(err || err?.response?.data?.message)
    }
}