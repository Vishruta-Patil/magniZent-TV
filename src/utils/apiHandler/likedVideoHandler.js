import axios from "axios"
import { GET_LIKED_VIDEOS } from "../../reducer/video/videoListConstant"

const encodedtoken = localStorage.getItem("token");
const config = {
  headers: {
    authorization: encodedtoken,
  },
};

export const getLikeVideos = async(dispatch) => {
    try {
        const response = await axios.get("/api/user/likes", {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
        dispatch({type: GET_LIKED_VIDEOS, payload: response.data.likes})
    }
    catch(err) {
        console.log(err)
    }
}

export const addToLikeVideo = async(video, dispatch) => {
    const data = {
        video,
    }
    try {
        const response = await axios.post("/api/user/likes", data, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
        dispatch({type: GET_LIKED_VIDEOS, payload: response.data.likes})
    } 
    catch(err) {
        console.log(err)
    }
}

export const deleteLikedVideo = async(id, dispatch) => {
    try {
        const response = await axios.delete(`/api/user/likes/${id}`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
        dispatch({type: GET_LIKED_VIDEOS, payload: response.data.likes})
    }
    catch(err) {
        console.log(err)
    }
}