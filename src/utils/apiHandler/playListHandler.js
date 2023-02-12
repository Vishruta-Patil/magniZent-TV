import axios from "axios";
import {
  ADD_PLAYLIST,
  ADD_VIDEO_TO_PLAYLIST,
  DELETE_PLAYLIST,
  GET_PLAYLIST,
  GET_VIDEO_FROM_PLAYLIST,
  REMOVE_VIDEO_FROM_PLAYLIST,
} from "../../reducer/playlist/playlistConstant";

export const getPlaylists = async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/playlist`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: GET_PLAYLIST, payload: response.data.playlists });
  } catch (err) {
    console.log(err);
  }
};

export const createPlaylist = async (dispatch, name) => {
  const data = {
    name,
  };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/playlist`,
      data,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: ADD_PLAYLIST, payload: response.data.playlist });
  } catch (err) {
    console.log(err);
  }
};

export const deletePlaylist = async (playlistId, dispatch) => {
  try {
    if(!localStorage.getItem("token")) {
      navigate("/login")
    }
    const response = await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/playlist/${playlistId}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: DELETE_PLAYLIST, payload: playlistId });
  } catch (err) {
    console.log(err?.response);
  }
};

export const createVideoInPlaylist = async (videoId, playListId, dispatch) => {
  const data = {
    videoId,
  };
  try {
    if(!localStorage.getItem("token")) {
      navigate("/login")
    }
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/playlist/${playListId}`,
      data,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({
      type: ADD_VIDEO_TO_PLAYLIST,
      payload: response.data.playlistVideo,
    });
  } catch (err) {
    console.log(err?.response);
  }
};

export const deleteVideoFromPLaylist = async (
  playListId,
  videoId,
  dispatch
) => {
  
  try {
    if(!localStorage.getItem("token")) {
      navigate("/login")
    }
    const response = await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/playlist/${playListId}/${videoId}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: REMOVE_VIDEO_FROM_PLAYLIST, payload: videoId });
  } catch (err) {
    console.log(err);
  }
};

export const getVideoFromPlaylist = async (playListId, dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/playlist/${playListId}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: GET_VIDEO_FROM_PLAYLIST, payload: response.data.video });
  } catch (err) {
    console.log(err);
  }
};
