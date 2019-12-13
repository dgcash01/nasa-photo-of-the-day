import React, { useState, useEffect } from "react";


const PhotoDate = (props) => {
  return (
    
<h3 className = 'photoDate' >{props.nasaData === undefined?'':props.nasaData.date} </h3>
    
  )
};
export default PhotoDate;