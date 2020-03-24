import React, {useContext} from "react";
import AlertContext from "../../context/alertContext/alertContext"

const Alert = () => {
  const alertContext = useContext(AlertContext);  
  const {alert} = alertContext  
  return (
    (alert != null) && (
    <div className={`alert alert-${alert.type}`}>
      <i className="fas fa-info-circle" /> 
      <p>{alert.msg}</p>
    </div>)
  );
};

export default Alert;