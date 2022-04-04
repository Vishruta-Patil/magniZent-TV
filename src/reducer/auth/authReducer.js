import {LOGIN_STATUS} from "./authConstant"

export const authReducer = (state,action) => {
    switch (action.type) {
        case LOGIN_STATUS:
            return {
                ...state,
                loginStatus: !state.loginStatus
            }
    }
}