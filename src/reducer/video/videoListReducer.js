import {
  GET_VIDEO_LIST,
  LOADER,
  CATEGORY,
  GET_VIDEO,
  GET_LIKED_VIDEOS,
  GET_WATCHLATER_VIDEOS,
  GET_HISTORY_VIDEOS,
  GET_PLAYLIST_VIDEOS,
  SET_PLAYLIST_MODAL,
  GET_SINGLE_PLAYLIST,
} from "./videoListConstant";

const videoListReducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEO_LIST:
      return {
        ...state,
        videoList: action.payload,
      };
    case LOADER:
      return {
        ...state,
        loader: !state.loader,
      };
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case GET_VIDEO:
      return {
        ...state,
        video: action.payload,
      };
    case GET_LIKED_VIDEOS:
      return {
        ...state,
        likedVideos: action.payload,
      };
    case GET_WATCHLATER_VIDEOS:
      return {
        ...state,
        watchLaterVideos: action.payload,
      };
    case GET_HISTORY_VIDEOS:
      return {
        ...state,
        historyVideos: action.payload,
      };

    case GET_PLAYLIST_VIDEOS:
      return {
        ...state,
        playlistVideo: action.payload,
      };
    case GET_SINGLE_PLAYLIST:
      return {
        ...state,
        singlePlaylist: action.payload,
      };
    case SET_PLAYLIST_MODAL:
      return {
        ...state,
        playlistModal: !state.playlistModal,
      };
  }
};

export default videoListReducer;
