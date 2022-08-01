/*global kakao */
import React from 'react';
import {useRef, useEffect} from "react";

const options = {
    center : new kakao.maps.LatLng(37.51189651103773, 127.06551755522024),
    level : 1,
};

function Map() {
  const container = useRef(null);

  useEffect(()=>{
      new kakao.maps.Map(container.current, options);
      return()=>{};
  },[])

    return(
        <div className="map" style={{width : "100%", height: "450px", marginBottom : "40px"}} ref={container}>

        </div>
    )
}

export default Map;