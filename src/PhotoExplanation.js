import React, { useState, useEffect } from "react";

const PhotoExplanation = (props) => {
  console.log(props);
  return (
    <>
<div className = 'photoExplanation'>{props.nasaData === undefined?'...':props.nasaData.explanation}</div>
    </>
  )
};
export default PhotoExplanation;