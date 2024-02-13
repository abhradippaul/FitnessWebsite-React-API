import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [cardValue ,setCardValue] = useState(null)
  console.log(cardValue)
  return (
    <div className="bg-stone-50">
      <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setCardValue={setCardValue} />} />
        <Route path="/exercise" element={<ExerciseDetail cardValue={cardValue} />} />
      </Routes>
      <Footer />
    </div>
    </div>
  );
}

export default App;
