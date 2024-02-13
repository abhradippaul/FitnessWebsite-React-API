import React, { useState } from "react";
import ExercisesCard from "./ExercisesCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Exercises({ value,setCardValue }) {
  // console.log(value);
  
  
  if (value && value[0] != undefined) {
    return (
      <section className="px-5" id="exercise">
        <h1 className="text-xl font-semibold my-4 text-center">
          Showing Results
        </h1>
        <div className="flex items-center flex-wrap justify-around">
          {value.map((e) => {
            return <ExercisesCard setCardValue={setCardValue} data={e} key={e.id} />;
          })}
        </div>
        
      </section>
    );
  }
}

export default Exercises;
