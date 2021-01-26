import LeadsActionTypes from './leads.types'

const INITIAL_STATE = {
    leads: null,
    loadingGetLeads: false,
    errorGetLeads: false,
  };
  
  const LeadsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
          case LeadsActionTypes.GET_DATA_LEADS:
            return {
              ...state,
              loadingGetLeads: true,
              errorGetLeads: false,
            }

          case LeadsActionTypes.GET_DATA_LEADS_SUCCESS:
            return {
              ...state,
              loadingGetLeads: false,
              errorGetLeads: false,
              leads: action.payload
            }

          case LeadsActionTypes.GET_DATA_LEADS_FAILURE:
            return {
              ...state,
              loadingGetLeads: false,
              errorGetLeads: false,
            }
        default: return state
    }
  };
  
  export default LeadsReducer;
  