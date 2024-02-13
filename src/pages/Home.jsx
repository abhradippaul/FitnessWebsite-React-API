import Exercises from "@/components/Exercises";
import HeroBanner from "@/components/HeroBanner";
import SearchExercises from "@/components/SearchExercises";
import React, { useState } from "react";

function Home({setCardValue}) {
  const [data, setData] = useState([]);
  const [api, setApi] = useState("");
  return (
    <section>
      <HeroBanner />
      <SearchExercises
        setValue={setData}
        exercises={api}
        setExercises={setApi}
        setValue1={setApi}
      />
      <Exercises value={data} cardInfo={api} setCardValue={setCardValue} />
    </section>
  );
}

export default Home;
