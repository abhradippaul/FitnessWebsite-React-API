import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { fetchDataUtils, options, url } from "@/utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercises({ setValue, exercises, setExercises, setValue1 }) {
  const [inputSearch, setInputSearch] = useState("");
  const [bodyPartsData, setBodyPartsData] = useState("");
  // const [tempRecivedData,setTempRecivedData] = useState([])
  const arr = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];
  useEffect(() => {
    const fetchData = async () => {
      let data = JSON.parse(localStorage.getItem("exercise"));
      if (!data) {
        const recivedData = await fetchDataUtils(`${url}`, options);
        // setTempRecivedData(recivedData)
        let currentTime = Math.floor(Date.now() / 1000);
        recivedData.push({ currentTime });
        localStorage.setItem("exercise", JSON.stringify(recivedData));
      }
      data = JSON.parse(localStorage.getItem("exercise"));
      if (
        Math.floor(Date.now() / 1000) - data[data.length - 1].currentTime >
        72
      ) {
        const recivedData = await fetchDataUtils(`${url}`, options);
        let currentTime = Math.floor(Date.now() / 1000);
        recivedData.push({ currentTime });
        localStorage.setItem("exercise", JSON.stringify(recivedData));
      }
      data = JSON.parse(localStorage.getItem("exercise"));
      let tempData =[]
      for (let i = 0; i < 30; i++) {
        tempData.push(data[i])
      }
      // console.log(tempData)
      setValue(tempData)
      setBodyPartsData(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const check = localStorage.getItem("exercise") || false
    
    let tempData = []
    if(check) {
      let data = JSON.parse(check)
      data.map((e) => {
        if(e.bodyPart === exercises) {
          tempData.push(e)
        }
      })
      if(tempData.length != 0){
        setValue(tempData)
      }
    }
  },[exercises])

  if (bodyPartsData) {
    return (
      <section className="h-dvh flex flex-col items-center justify-around">
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
              setInputSearch(e.target.value.toLowerCase());
            }}
          />
          <Button
            variant="destructive"
            className="mx-2 md:text-lg md:h-12"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "#exercise";
              for (let i = 0; i < arr.length; i++) {
                if (inputSearch && arr[i] === inputSearch) {
                  setExercises(inputSearch);
                  setInputSearch("");
                }
              }
            }}
          >
            Search
          </Button>
        </div>
        <HorizontalScrollbar data={arr} getDataFromCard={setExercises} />
      </section>
    );
  }
}

export default SearchExercises;
