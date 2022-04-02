import axios from "axios";
import {GET_VIDEO_LIST} from "../reducer/videoListConstant"

export const getVideoList = async (dispatch) => {
  try {
    const response = await axios.get("/api/videos");
    dispatch({ type: GET_VIDEO_LIST, payload: response.data.videos });
    dispatch({type:"CATEGORY", payload:"All"})
  } catch (err) {
    console.log(err);
  }
};
