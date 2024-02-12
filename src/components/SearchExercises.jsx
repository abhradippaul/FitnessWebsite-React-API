import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { fetchDataUtils, options, url } from "@/utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercises({ setValue, exercises, setExercises,setValue1}) {
  const [inputSearch, setInputSearch] = useState("");
  const [bodyPartsData, setBodyPartsDate] = useState("");
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
    const fetchData = async (params) => {
      let data = JSON.parse(localStorage.getItem("bodypartsdata"));
      if (!data) {
        const recivedData = await fetchDataUtils(`${url}${params}`, options);
        console.log(recivedData);
        localStorage.setItem("bodypartsdata", JSON.stringify(recivedData));
      }
      setBodyPartsDate(data);
    };
    fetchData("List");
  }, []);

  useEffect(() => {
    const fetchData = async (data) => {
      const recivedData = await fetchDataUtils(`${url}/${data}`, options);
      if (recivedData && !recivedData?.statusCode) {
        setValue(recivedData);
        localStorage.setItem("exercise", JSON.stringify(recivedData));
      }
    };

    if (exercises) {
      fetchData(exercises);
    } else {
      const data = JSON.parse(localStorage.getItem("exercise"));
      if (data) {
        // console.log(data[0].gifUrl)
        const getData = async () => {
          return await fetch(data[0].gifUrl);
        };
        if (getData[0]?.statusCode === 404) {
          console.log("gif api call")
          fetchData(arr[Math.floor(Math.random() * arr.length)]);
        }
        // fetch(data[0].gifUrl).then((data) => {
        //   console.log(data)
        // })
        //   .catch((err) => {
        //     console.log(err)
        //     // fetchData(arr[Math.floor(Math.random() * arr.length)]);
        //   });
      } else {
        fetchData(arr[Math.floor(Math.random() * arr.length)]);
      }
      setValue(data);
    }
  }, [exercises]);
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
            window.location.href='#exercise'
            for (let i = 0; i < arr.length; i++) {
              if (inputSearch && arr[i] === inputSearch) {
                setExercises(inputSearch);
                setInputSearch("")
              }
            }
          }}
        >
          Search
        </Button>
      </div>
      <HorizontalScrollbar data={bodyPartsData} getDataFromCard={setValue1}/>
    </section>
  );
}

export default SearchExercises;
