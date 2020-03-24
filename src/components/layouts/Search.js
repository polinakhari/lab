import React, { useContext, useState } from "react";
import Context from "../../context/Context";
import AlertContext from "../../context/alertContext/alertContext";
import { useHistory } from "react-router-dom";

const Search = () => {
  const context = useContext(Context);
  const alertContext = useContext(AlertContext);
  const history = useHistory();
  const { searchRecomendations } = context;
  const { setAlert } = alertContext;
  const [text, setText] = useState("");

  // onChange
  const onChange = e => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("text", "light");
    } else {
      searchRecomendations(text);
      setText("");
      history.push("/foundrecomendations");
      //history.replace("")
    }
  };

  return (
    <div className="wrap">
      <form onSubmit={onSubmit} className="search">
        <input
          type="text"
          name="text"
          className="searchTerm"
          placeholder="Поиск рекомендаций"
          value={text}
          onChange={onChange}
          required
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
