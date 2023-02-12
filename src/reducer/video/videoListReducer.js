import {
  GET_VIDEO_LIST,
  LOADER,
  CATEGORY,
  GET_VIDEO,
  GET_LIKED_VIDEOS,
  ADD_TO_LIKED_VIDEOS,
  RESET_DATA,
  DELETE_FROM_LIKED_VIDEOS,
  SEARCH_VIDEO,
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

        case SEARCH_VIDEO:
          console.log(action.payload)
          return {
            ...state,
            videoList: state.videoList.filter(item => action.payload === item.title)
          }

    
    case RESET_DATA:
      return {
        ...state,
        loader: false,
        videoList: [],
        category: "All",
        video: [],
        likedVideos: [],
        historyVideos: [],
        playlistVideo: [],
        playlistModal: false,
        singlePlaylist: [],
      };
  }
};

export default videoListReducer;
