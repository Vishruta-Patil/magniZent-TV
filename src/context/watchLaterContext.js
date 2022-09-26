import { createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "../reducer/watchLater/watchLaterReducer";

const WatchLaterContext = createContext()
const useWatchLater = () => useContext(WatchLaterContext)

const initialValue = {
    watchLaterVideos: []
}

const WatchLaterProvider = ({children}) => {
    const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, initialValue)

    return (
        <WatchLaterContext.Provider value={{watchLaterState, watchLaterDispatch}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

export {useWatchLater, WatchLaterProvider}