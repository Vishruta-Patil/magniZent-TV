import { ADD_TO_WATCHLATER_VIDEOS, GET_WATCHLATER_VIDEOS, REMOVE_FROM_WATCHLATER_VIDEOS } from "./watchLaterContant";

export const watchLaterReducer = (state, action) => {
    switch(action.type) {
        case GET_WATCHLATER_VIDEOS:
            return {
                ...state,
                watchLaterVideos: action.payload
            }
        case ADD_TO_WATCHLATER_VIDEOS:
            return {
                ...state,
                watchLaterVideos: [...state.watchLaterVideos, action.payload]
            }
        case REMOVE_FROM_WATCHLATER_VIDEOS: 
            return {
                ...state,
                watchLaterVideos: state.watchLaterVideos.filter(item => item?.video?._id !== action.payload)
            }
    } 
}