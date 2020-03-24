import React from "react";

const RecomendationItem = (props) => {
  console.log(props)
  const { number, item } = props;  
  console.log(item)
  return (
    <div className="recom_item">
      <div className="recom-top">
      <p className="count">{number + 1}</p>
      <p class="recom_title">{item.title}</p>
      </div>
      <p className="recom_text">{item.recomendation}</p>
      <br />
    </div>
  );
};
export default RecomendationItem;
