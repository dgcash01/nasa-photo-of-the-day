import React, { useState, useEffect } from "react";


const PhotoPrevNextBtn = (props) => {
  const today = new Date();
  const isToday = (props.nasaData.date === `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
  let targetDate = new Date();
  if (props.nasaData === undefined) {
    return (<> </>);
  }
  if (props.isNext) {
    targetDate = new Date (props.nasaData.date);
    targetDate.setDate(targetDate.getDate() + 2);
  }
  else {
    targetDate = new Date (props.nasaData.date);
    targetDate.setDate(targetDate.getDate());
  }
  console.log('here');
  console.log(props);
  return (

    <div className={'photoPrevNextBtn ' + props.nasaData === undefined ? '' : props.nasaData.date} className={isToday && props.isNext ? 'hideMe' : 'showMe'} onClick={e => {
      props.onClickFunction(targetDate);
    }} > {props.isNext ? 'Next' : 'Prev'} </div>

  )
};
export default PhotoPrevNextBtn;