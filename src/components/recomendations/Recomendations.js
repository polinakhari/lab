import React, { useContext } from "react";
import Context from "../../context/Context";
import RecomendationItem from "./RecomendationItem";

const Recomendations = props => {
  document.body.classList.add('bg_new')
  const context = useContext(Context);
  const { type } = props;
  let data = [];

  if (context[type] == "") {
    return (
      <div>
        <p> Ничего не найдено </p>
      </div>
    );
  }
  if (type === "search") {
    data = context[type].map((x, idx) => (
      <RecomendationItem key={idx} number={idx} item={x} />
    ));
  } else {
    if (context[type].filter(x => x.status === false).length < 1)
      return (
        <div>
          <p> Рекомендаций не найдено </p>
        </div>
      );
    data = context[type]
      .filter(x => x.status === false)
      .map((x, idx) => <RecomendationItem key={idx} number={idx} item={x} />);
  }
  return <div className="recom_list">{data}</div>;
};
export default Recomendations;
