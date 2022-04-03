import { GET_VIDEO_LIST, LOADER, CATEGORY } from "./videoListConstant"

const videoListReducer = (state, action) => {
    switch(action.type) {
        case GET_VIDEO_LIST:
            return {
                ...state,
                videoList: action.payload
            }
        case LOADER:
            return {
                ...state,
                loader: !state.loader
            }
        case CATEGORY:
            return {
                ...state,
                category: action.payload
            }
    }
}

export default videoListReducer