import { ADD_TO_HISTORY_VIDEOS, GET_HISTORY_VIDEOS, REMOVE_FROM_HISTORY_VIDEOS } from "./historyConstant"

export const historyReducer = (state, action) => {
    switch(action.type) {
        case GET_HISTORY_VIDEOS:
            return {
                ...state,
                historyVideos: action.payload
            }
        case ADD_TO_HISTORY_VIDEOS:
            return {
                ...state,
                historyVideos: [...state.historyVideos, action.payload]
            }
        case REMOVE_FROM_HISTORY_VIDEOS: 
            return {
                ...state,
                historyVideos: state.historyVideos.filter(item => item?.video?._id !== action.payload)
            }
    } 
}