import React, { useState, useEffect } from "react";


const Photo = (props) => {
  if (props.nasaData && props.nasaData.media_type === 'video' && props.isBackground === false) {
    return (<iframe src={props.nasaData === undefined ? '' : props.nasaData.url}> </iframe>);
  } else if (props.nasaData && props.nasaData.media_type === 'video' && props.isBackground) {
    let videoId = props.nasaData.url.split('/').pop().split('?')[0];
    let thumbnailImg = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    return (<img src={props.nasaData === undefined ? '' : thumbnailImg} className={props.isBackground ? 'pageBackground' : 'mainPhoto'} />);
  } else if (props.nasaData && props.nasaData.media_type === 'image') {
    return (<img src={props.nasaData === undefined ? '' : props.nasaData.url} className={props.isBackground ? 'pageBackground' : 'mainPhoto'} />);

  } else {
    return (<> </>);
  }
};
export default Photo;