import React, { useState, useEffect } from "react";



export const Seasons = (props) => {
  const isLargeScreen = window.innerWidth > 767;


  if (isLargeScreen && props.season) {
    const snowflakes = [];
    for (let i = 0; i < 300; i++) {
      snowflakes.push(<div key={i} className="snowFlake" />);
    }
    return snowflakes;
  } else {
    return null; // or an empty array if you prefer
  }
};
