import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { fetchDataUtils, options, url } from "@/utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercises() {
  const [inputSearch, setInputSearch] = useState("");
  const [bodyPartsData, setBodyPartsDate] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      let data = JSON.parse(localStorage.getItem("bodypartsdata"));
      if (!data) {
        const recivedData = await fetchDataUtils(url, options);
        console.log(recivedData);
        localStorage.setItem("bodypartsdata", JSON.stringify(recivedData));
      }
      setBodyPartsDate(data);
    };
    fetchData();
  }, []);
  return (
    <section className="border h-dvh flex flex-col items-center justify-around">
      <h1 className="font-bold w-1/2 text-xl text-center md:text-4xl">
        Awesome Exercises You Should Know
      </h1>
      <div className="flex items-center justify-center w-4/5 md:h-12">
        <Input
          className="h-full bg-white md:text-lg"
          type="text"
          placeholder="Search Exercises"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <Button
          variant="destructive"
          className="md:text-lg md:h-12"
          onClick={(e) => {
            e.preventDefault();
            console.log(inputSearch);
          }}
        >
          Search
        </Button>
      </div>
      <HorizontalScrollbar data={bodyPartsData} />
    </section>
  );
}

export default SearchExercises;
