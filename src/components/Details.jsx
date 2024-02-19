import React from "react";

function Details({ cardValue }) {
  if (cardValue) {
    return (
      <div className="min-h-[90dvh] flex flex-col items-center justify-between  md:flex-row">
        <div className="w-1/2 min-w-64">
          <img
            className="h-full w-full object-cover"
            src={cardValue.gifUrl}
            alt="image"
          />
        </div>
        <div className="h-full min-w-64 w-1/2 p-8 flex items-center justify-around flex-col">
          <h1 className=" my-8 text-2xl font-bold md:text-4xl">
            {cardValue.name}
          </h1>
          <p className="my-8">{cardValue.instructions}</p>
          <div className="text-lg font-semibold">
            <h1>Body Part : {cardValue.bodyPart}</h1>
            <h1>Equipment : {cardValue.equipment}</h1>
            <h1>Target : {cardValue.target}</h1>
            <h1>Secondary Muscles : {cardValue.secondaryMuscles}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
