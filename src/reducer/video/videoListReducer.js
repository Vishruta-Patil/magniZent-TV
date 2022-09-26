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
  ADD_TO_LIKED_VIDEOS,
  ADD_TO_HISTORY_VIDEOS,
  RESET_DATA,
  DELETE_FROM_LIKED_VIDEOS,
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
    case ADD_TO_LIKED_VIDEOS:
      return {
        ...state,
        likedVideos: [...state.likedVideos, action.payload],
      };
      case DELETE_FROM_LIKED_VIDEOS:
        return {
          ...state,
          likedVideos: state.likedVideos.filter(item => item?.video?._id !== action.payload),
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
    case ADD_TO_HISTORY_VIDEOS:
      return {
        ...state,
        historyVideos: [...state.historyVideos, action.payload],
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
    case RESET_DATA:
      return {
        ...state,
        loader: false,
        videoList: [],
        category: "All",
        video: [],
        likedVideos: [],
        watchLaterVideos: [],
        historyVideos: [],
        playlistVideo: [],
        playlistModal: false,
        singlePlaylist: [],
      };
  }
};

export default videoListReducer;
