import axios from "axios";
import {GET_VIDEO_LIST, LOADER, GET_VIDEO} from "../../reducer/video/videoListConstant"
import { getAllVideos, getSingleVideo } from "../../Services/services";

export const getVideoList = async (dispatch) => {
  dispatch({type: LOADER})
  try {
    const response = await getAllVideos();
    dispatch({type: LOADER})
    dispatch({ type: GET_VIDEO_LIST, payload: response.data.videos});
  } catch (err) {
    dispatch({type: LOADER})
    console.log(err);
  }
};

export const getVideo = async(id, dispatch) => {
  dispatch({type: LOADER})
  try {
    const response = await getSingleVideo(id)
    dispatch({type: LOADER})
    dispatch({ type: GET_VIDEO, payload: response.data.video });
  }
  catch(err) {
    dispatch({type: LOADER})
    console.log(err)
  }
}
