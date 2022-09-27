import {
  GET_PLAYLIST,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  GET_VIDEO_FROM_PLAYLIST,
  ADD_VIDEO_TO_PLAYLIST,
  REMOVE_VIDEO_FROM_PLAYLIST,
} from "./playlistConstant";

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case GET_PLAYLIST:
      return {
        ...state,
        playlistVideo: action.payload
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        playlistVideo: [...state.playlistVideo, action.payload]
      };
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlistVideo: state.playlistVideo.filter(playlist => playlist?._id !== action.payload)
      };
    case GET_VIDEO_FROM_PLAYLIST:
      return {
        ...state,
        singlePlaylist: action.payload
      };
    case ADD_VIDEO_TO_PLAYLIST:
      return {
        ...state,
        singlePlaylist: [...state.singlePlaylist, action.payload]
      };
    case REMOVE_VIDEO_FROM_PLAYLIST:
      return {
        ...state,
        singlePlaylist: state.singlePlaylist.filter(item => item?._id !== action.payload) 
      };
  }
};
