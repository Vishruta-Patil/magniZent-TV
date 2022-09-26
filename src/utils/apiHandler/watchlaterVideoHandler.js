import axios from "axios"
import { ADD_TO_WATCHLATER_VIDEOS, GET_WATCHLATER_VIDEOS, REMOVE_FROM_WATCHLATER_VIDEOS } from "../../reducer/watchLater/watchLaterContant";

const token = localStorage.getItem("token");
const config = {
  headers: {
    authorization: token,
  },
};

export const getWatchLaterVideos = async(dispatch) => {
    try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}/watchlater`,
          {
            headers: {
              token,
            },
          }
        )
        dispatch({type: GET_WATCHLATER_VIDEOS, payload: response.data.watchLater})
        console.log(response)
    }
    catch(err) {
        console.log(err || err?.response?.data?.message)
    }
}

export const addToWatchLaterVideo = async(videoId, dispatch) => {
    const data = {
      videoId,
    }
    try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/watchlater`,
          data,
          {
            headers: {
              token,
            },
          }
        )
        dispatch({type: ADD_TO_WATCHLATER_VIDEOS, payload: response.data.watchLater})
        console.log(response)
    } 
    catch(err) {
        console.log(err || err?.response?.data?.message)
    }
}

export const deleteWatchLaterVideo = async(id, dispatch) => {
    try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_ENDPOINT}/watchlater/${id}`,
          {
            headers: {
              token,
            },
          }
        )
        dispatch({type: REMOVE_FROM_WATCHLATER_VIDEOS, payload: id})
        console.log(response)
    }
    catch(err) {
        console.log(err || err?.response?.data?.message)
    }
}