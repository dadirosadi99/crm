import CustomersActionTypes from './customers.types'

const INITIAL_STATE = {
    company: null,
    loadingGetCompany: false,
    errorGetCompany: false,
    agents: null,
    loadingGetAgents: false,
    errorGetAgents: false,
  };
  
  const CustomersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
          case CustomersActionTypes.GET_DATA_COMPANY:
            return {
              ...state,
              loadingGetCompany: true,
              errorGetCompany: false,
            }

          case CustomersActionTypes.GET_DATA_COMPANY_SUCCESS:
            return {
              ...state,
              loadingGetCompany: false,
              errorGetCompany: false,
              company: action.payload
            }
          case CustomersActionTypes.GET_DATA_COMPANY_FAILURE:
            return {
              ...state,
              loadingGetCompany: false,
              errorGetCompany: false,
            }
            case CustomersActionTypes.GET_DATA_AGENTS:
              return {
                ...state,
                loadingGetAgents: true,
                errorGetAgents: false,
              }
  
            case CustomersActionTypes.GET_DATA_AGENTS_SUCCESS:
              return {
                ...state,
                loadingGetAgents: false,
                errorGetAgents: false,
                agents: action.payload
              }
            case CustomersActionTypes.GET_DATA_AGENTS_FAILURE:
              return {
                ...state,
                loadingGetAgents: false,
                errorGetAgents: false,
              }
        default: return state
    }
  };
  
  export default CustomersReducer;
  