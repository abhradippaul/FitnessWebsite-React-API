import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

function SearchExercises() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <section className="border h-dvh flex flex-col items-center">
      <h1 className="font-bold w-1/2 text-lg text-center">
        Awesome Exercises You Should Know
      </h1>
      <div className="flex items-center justify-center w-4/5">
        <Input
          className="h-full md:text-lg"
          type="text"
          placeholder="Search Exercises"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <Button
          variant="destructive"
          size="lg"
          className="md:text-lg"
          onClick={(e) => {
            e.preventDefault();
            console.log(inputSearch);
          }}
        >
          Search
        </Button>
      </div>
    </section>
  );
}

export default SearchExercises;
