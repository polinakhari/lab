import React, { useReducer} from "react";
import Context from "./Context";
import Reducer from "./Reducer";
import { HANDLECHANGE, SEARCH, CLEAR } from "./types";
import info from "../info";

const State = props => {
  const initialState = { ...info, search: [] };
  const [state, dispatch] = useReducer(Reducer, initialState);
  // Search recomendation  

  const searchRecomendations = text => {    
    const data = [...state.domain, ...state.site, ...state.page, ...state.feedback, ...state.communication].filter(x =>
      x.text.toLowerCase().includes(text.toLowerCase()) || x.recomendation.toLowerCase().includes(text.toLowerCase()) || x.title.toLowerCase().includes(text.toLowerCase())
    );
    console.log(data);
    console.log(text);
    dispatch({
      type: SEARCH,
      payload: data
    });
  };
  //Change status
  const handleChange = (e, type) => {    
    let newUsers = [...state[type]];    
    if (e.target.value === "true") newUsers[e.target.name].status = true;
    else newUsers[e.target.name].status = false;

    dispatch({
      type: HANDLECHANGE,
      payload: newUsers
    });
  };
  // clear search
  const clear = () => {
    dispatch({
      type: CLEAR
    });
  };
  document.body.style.height = document.body.clientWidth;
  

  return (
    <Context.Provider
      value={{
        domain: state.domain,
        site: state.site,
        page: state.page,
        feedback: state.feedback,
        communication: state.communication,
        handleChange,
        searchRecomendations,
        search: state.search,
        clear
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
