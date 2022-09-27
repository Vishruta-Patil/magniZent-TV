import { createContext, useContext, useReducer } from "react";
import { historyReducer } from "../reducer/history/historyReducer";

const HistoryContext = createContext()
const useHistory = () => useContext(HistoryContext)

const initialValue = {
    historyVideos: []
}

const HistoryProvider = ({children}) => {
    const [historyState, historyDispatch] = useReducer(historyReducer, initialValue)

    return (
        <HistoryContext.Provider value={{historyState, historyDispatch}}>
            {children}
        </HistoryContext.Provider>
    )
}

export {useHistory, HistoryProvider}