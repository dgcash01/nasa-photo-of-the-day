import React, { useState, useEffect } from "react";

const PhotoTitle = (props) => {
  console.log(props);
  return (
    <>
<h1 className = 'photoTitle'>{props.nasaData === undefined?'...':props.nasaData.title}</h1>
    </>
  )
};
export default PhotoTitle;