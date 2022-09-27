import axios from "axios";
import {
  ADD_TO_LIKED_VIDEOS,
  DELETE_FROM_LIKED_VIDEOS,
  GET_LIKED_VIDEOS,
} from "../../reducer/video/videoListConstant";

const token = localStorage.getItem("token");

export const getLikeVideos = async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/likes`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: GET_LIKED_VIDEOS, payload: response.data.like });
  } catch (err) {
    console.log(err?.response?.data?.message);
  }
};

export const addToLikeVideo = async (videoId, dispatch) => {
  const data = {
    videoId,
  };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/likes`,
      data,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: ADD_TO_LIKED_VIDEOS, payload: response?.data?.like });
  } catch (err) {
    console.log(err?.response?.data?.message);
  }
};

export const deleteLikedVideo = async (id, dispatch) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/likes/${id}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: DELETE_FROM_LIKED_VIDEOS, payload: id });
  } catch (err) {
    console.log(err?.response);
  }
};
