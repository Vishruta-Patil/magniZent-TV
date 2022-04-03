import axios from "axios";
import {GET_VIDEO_LIST, CATEGORY, LOADER} from "../reducer/videoListConstant"

export const getVideoList = async (dispatch) => {
  dispatch({type: LOADER})
  try {
    const response = await axios.get("/api/videos");
    dispatch({type: LOADER})
    dispatch({ type: GET_VIDEO_LIST, payload: response.data.videos });
    dispatch({type:CATEGORY, payload:"All"})
  } catch (err) {
    dispatch({type: LOADER})
    console.log(err);
  }
};
