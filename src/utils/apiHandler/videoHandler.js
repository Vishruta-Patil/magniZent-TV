import axios from "axios";
import {GET_VIDEO_LIST, CATEGORY, LOADER} from "../../reducer/videoListConstant"
import { getAllVideos } from "../../Services/services";

export const getVideoList = async (dispatch) => {
  dispatch({type: LOADER})
  try {
    const response = await getAllVideos();
    dispatch({type: LOADER})
    dispatch({ type: GET_VIDEO_LIST, payload: response.data.videos, category:"All" });
  } catch (err) {
    dispatch({type: LOADER})
    console.log(err);
  }
};
