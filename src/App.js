import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoTitle from "./PhotoTitle";
import Photo from "./Photo";
import axios from 'axios';
import PhotoExplanation from "./PhotoExplanation";
import PhotoDate from "./PhotoDate";
import PhotoPrevNextBtn from "./PhotoPrevNextBtn";


function App() {
  const [nasaData, setNasaData] = useState();
  function getTheData (myDate){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Fe83UmUV1sOLA7MF2Qbi4i1nhQmyvLT9ZaPSs6pj&date=${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`)
      .then(resp => {
        setNasaData(resp.data);
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });      
  }
  useEffect(() => {
    getTheData(new Date());
  }, []);
  if (nasaData === undefined) {
    // loading screen
    return (<div></div>);
  }
  else {
    // return data
    const onClickFunction = function(targetDate){
      getTheData(targetDate);
    };
    return (
      <div className="App">
        <Photo nasaData={nasaData} isBackground = {true} />
        <PhotoDate nasaData={nasaData} />
        <PhotoTitle nasaData={nasaData} />
        <PhotoPrevNextBtn nasaData={nasaData} isPrev = {true} onClickFunction = {onClickFunction} />
        <Photo nasaData={nasaData} isBackground = {false} />
        <PhotoPrevNextBtn nasaData={nasaData} isNext = {true} onClickFunction = {onClickFunction} />
        <PhotoExplanation nasaData={nasaData} />     
      </div>
    );
  }
}

export default App;
