import AuthActionTypes from './auth.types'

const INITIAL_STATE = {
    user: null,
    loadingLogin: false,
    errorLogin: false,
    loadingLogout: false,
    errorLogout: false
  };
  
  const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
          case AuthActionTypes.LOGIN:
            return {
              ...state,
              loading: true,
              error: false,
              success: false,
              status: 200
            }

          case AuthActionTypes.LOGIN_SUCCESS:
            return {
              ...state,
              loadingLogin: false,
              errorLogin: false,
              user: action.payload
            }

          case AuthActionTypes.LOGIN_FAILURE:
            return {
              ...state,
              loadingLogin: false,
              errorLogin: true,
            }

          case AuthActionTypes.LOGOUT:
            return {
              ...state,
              loadingLogout: true,
              errorLogout: false,
            }

          case AuthActionTypes.LOGOUT_SUCCESS:
            // const {user} = action.payload
            return {
              ...state,
              loadingLogout: false,
              errorLogout: false,
              user: null
            }

          case AuthActionTypes.LOGOUT_FAILURE:
            return {
              ...state,
              loadingLogout: false,
              errorLogout: true,
            }

        default: return state
    }
  };
  
  export default AuthReducer;
  