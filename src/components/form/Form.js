import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";
import InputItem from "./InputItem";

export default function Form(props) {
  const context = useContext(Context);
  const {type} = props;
  const { handleChange } = context;  
  const data = context[type].map((x, idx) => (
    <InputItem data={x} type={type} idx={idx} key={idx} handleChange={handleChange} />
  ));
  document.body.classList.add("bg_new");
  
  return (
    <form className="form">
      <div className="form-bg">
      {data}
      <Link to="/domainrecomendations">
        <button className="btn">Отправить</button>
      </Link>
      </div>
    </form>
  );
}
