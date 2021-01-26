// import axios from '../../axiosInstance'
import  CustomersActionTypes  from './customers.types';

// const leadsUrl = ``

export const getAgents = () =>  {
    return async (dispatch) => {
      try {
        dispatch({
          type: CustomersActionTypes.GET_DATA_AGENTS
        })

      
        // const res = await axios.get(
        //   leadsUrl
        // )

        const data = [];
          for (let i = 0; i < 100; i++) {
            data.push({
              key: i,
              agent_id: i+1,
              agent_name: `Agents ${i}`,
              agency: 'Independent agent',
              email: `agent@gmail.com`,
            });
          }

        const res = {
          data: {
            data: data
          }
        }
  
        dispatch({
          type: CustomersActionTypes.GET_DATA_AGENTS_SUCCESS,
          payload: res.data.data
        })

      } catch (err) {
        dispatch({
          type: CustomersActionTypes.GET_DATA_AGENTS_FAILURE,
          payload: err && err.response && err.response.status
        })
      }
    }
  }

  export const getCompany = () =>  {
    return async (dispatch) => {
      try {
        dispatch({
          type: CustomersActionTypes.GET_DATA_COMPANY
        })

      
        // const res = await axios.get(
        //   leadsUrl
        // )

        const data = [];
          for (let i = 0; i < 100; i++) {
            data.push({
              key: i,
              company_id: i+1,
              company_name: `Company ${i}`,
              agency: 'Independent Comapny',
              email: `company@gmail.com`,
            });
          }

        const res = {
          data: {
            data: data
          }
        }
  
        dispatch({
          type: CustomersActionTypes.GET_DATA_COMPANY_SUCCESS,
          payload: res.data.data
        })

      } catch (err) {
        dispatch({
          type: CustomersActionTypes.GET_DATA_COMPANY_FAILURE,
          payload: err && err.response && err.response.status
        })
      }
    }
  }

