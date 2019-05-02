import React from 'react';

export const DrawRating = (props) => {
  //Shows no stars if no star rating was inputed
  let numOfStars = 0;
  let starString = "";
  if (props.starRating) {
    if (props.starRating > 0 && props.starRating <= 10) numOfStars = props.starRating;
    if (props.starRating > 10) numOfStars = 10;
  }

  for (let i = 0; i < 10; i++) {
    //If i has exceeded the number of stars specified, show outlines of stars
    //Otherwise, show filled stars.
    i < numOfStars ? starString += "\u2605" : starString += "\u2606";
  }

  return (
      <p className="star-display">{starString}</p>
  );
};

export default DrawRating;