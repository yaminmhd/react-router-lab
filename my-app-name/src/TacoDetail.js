import React from "react";
import { Redirect } from "react-router-dom";

const TacoDetail = props => {
  if (props.match.params.id === "42") {
    return <Redirect to="/specialTacoPage" />;
  } else {
    return (
      <div className="App">
        <h1>
          This is the detailed page for taco number {props.match.params.id}
        </h1>
      </div>
    );
  }
};

export default TacoDetail;
