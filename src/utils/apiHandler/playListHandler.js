import axios from "axios"
import { GET_PLAYLIST_VIDEOS, GET_SINGLE_PLAYLIST } from "../../reducer/video/videoListConstant"

const encodedtoken = localStorage.getItem("token");
const config = {
  headers: {
    authorization: encodedtoken,
  },
};

export const getPlaylists = async(dispatch) => {
    try {
    const response = await axios.get("/api/user/playlists", config)
    dispatch({type: GET_PLAYLIST_VIDEOS, payload: response.data.playlists})
    } 
    catch(err) {
        console.log(err)
    }
}

export const createPlaylist = async(dispatch, title) => {
    const data = {
        playlist: {title, description:"" }
    }
    try {
        const response = await axios.post("/api/user/playlists", data, config)
        dispatch({type: GET_PLAYLIST_VIDEOS, payload: response.data.playlists})
    }
    catch(err) {
        console.log(err)
    }
}

export const deletePlaylist = async(id, dispatch) => {
    try {
        const response = await axios.delete(`/api/user/playlists/${id}`, config)
        dispatch({type: GET_PLAYLIST_VIDEOS, payload: response.data.playlists})
    }
    catch(err) {
        console.log(err)
    }
}

export const createVideoInPlaylist = async(video, id, dispatch) => {
    const data = {
        video: video
    }
    try {

        const response = await axios.post(`/api/user/playlists/${id}`, data, config)
        dispatch({type: GET_SINGLE_PLAYLIST, payload: response.data.playlist})
    } catch(err) {
        console.log(err)
    }
}

export const deleteVideoFromPLaylist = async(playListId, videoId) => {
    try {
        const response = await axios.delete(`/api/user/playlists/${playListId}/${videoId}`, config)
        dispatch({type: GET_SINGLE_PLAYLIST, payload: response.data.playlist})
    }
    catch(err) {
        console.log(err)
    }
}

export const getVideoFromPlaylist = async(playListId, dispatch) => {
    try {
        const response = await axios.get(`/api/user/playlists/${playListId}`, config)
        dispatch({type: GET_SINGLE_PLAYLIST, payload: response.data.playlist})
    }
    catch(err) {
        console.log(err)
    }
}