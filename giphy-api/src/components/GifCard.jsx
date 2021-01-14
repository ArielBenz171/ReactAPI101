import React, { Component } from "react";

const GifCard = (props) => (
  <div className="gifcard">
    <img src={props.url} />
  </div>
);

export default GifCard;
