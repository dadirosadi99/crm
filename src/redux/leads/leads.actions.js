// import axios from '../../axiosInstance'
import  LeadsActionTypes  from './leads.types';

// const leadsUrl = ``

export const getLeads = () =>  {
    return async (dispatch) => {
      try {
        dispatch({
          type: LeadsActionTypes.GET_DATA_LEADS
        })

      
        // const res = await axios.get(
        //   leadsUrl
        // )

        const data = [];
          for (let i = 0; i < 100; i++) {
            data.push({
              key: i,
              leads_id: i+1,
              leads_name: `Edrward ${i}`,
              agency: 'Independent agent',
              opportunity: `2.000.000`,
            });
          }

        const res = {
          data: {
            data: data
          }
        }
  
        dispatch({
          type: LeadsActionTypes.GET_DATA_LEADS_SUCCESS,
          payload: res.data.data
        })

      } catch (err) {
        dispatch({
          type: LeadsActionTypes.LOGIN_FAILURE,
          payload: err && err.response && err.response.status
        })
      }
    }
  }

