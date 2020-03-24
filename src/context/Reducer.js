import { HANDLECHANGE, SEARCH, CLEAR} from "./types";  

  export default (state, action) => {
    switch (action.type) {
      case HANDLECHANGE: 
        return {
          ...state,          
          domain: action.payload
        }; 
        case SEARCH: 
        console.log(action.payload)
        return {
          ...state,          
          search: action.payload
        };   
        case CLEAR:
        return{
            ...state,
            search: []
        }     
        default:
            return state;
        
    }}
    