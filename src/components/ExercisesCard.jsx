import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function ExercisesCard({ data,setCardValue }) {
  // console.log(data);
  return (
    <Link to="/exercise" className="w-[300px] m-8 bg-white rounded-sm shadow-md cursor-pointer hover:scale-105 transition-transform hover:border-y-2 border-red-500" onClick={() => {
      setCardValue(data)
    }}>
      <img src={data.gifUrl} alt="Sorry Image not found" loading="lazy" />
      <div className=" h-[25%] flex items-center justify-center flex-wrap">
        <Button variant="destructive" className="m-4 md:text-lg">
          {data.bodyPart}
        </Button>
        <Button className="mx-4 md:text-lg">{data.target}</Button>
      </div>
      <h1 className="m-2 text-xl font-semibold text-center">{data.name}</h1>
    </Link>
  );
}

export default ExercisesCard;
