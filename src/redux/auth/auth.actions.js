import axios from '../../axiosInstance'
import  AuthActionTypes  from './auth.types';

// const loginUrl = ``
const logoutUrl = ``

export const login = ({username = null, password = null, role = null}) =>  {
    return async (dispatch) => {
      try {
        dispatch({
          type: AuthActionTypes.LOGIN
        })

      
        // const res = await axios.post(
        //   loginUrl,
        //   {
        //     username,
        //     password,
        //     role
        //   }
        // )

        const res = {
          data: {
            data: {
              token: true
            }
          }
        }
  
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: res.data.data
        })

      } catch (err) {
        dispatch({
          type: AuthActionTypes.LOGIN_FAILURE,
          payload: err && err.response && err.response.status
        })
      }
    }
  }


export const logout = () =>  {
  return async (dispatch, getState) => {
    const state = getState()
    const token = state.auth.token
  
    try {
      dispatch({
        type: AuthActionTypes.LOGOUT
      })
  
      await axios.delete(logoutUrl, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })

      dispatch({
        type: AuthActionTypes.LOGOUT_SUCCESS
      })

    } catch (err) {
      dispatch({
        type: AuthActionTypes.LOGOUT_FAILURE
      })
    }
  }
}


