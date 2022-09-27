import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducer/playlist/playlistReducer";

const PlaylistContext = createContext()
const usePlaylist = () => useContext(PlaylistContext)

const initialValue = {
    playlistVideo: [],
    playlistModal: false,
    singlePlaylist: []
}

const PlaylistProvider = ({children}) => {
    const [playlistState, playlistDispatch] = useReducer(playlistReducer, initialValue)

    return (
        <PlaylistContext.Provider value={{playlistState, playlistDispatch}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export {usePlaylist, PlaylistProvider}