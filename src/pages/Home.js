import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Herobanner from "./Herobanner";
import Search from "./Search";
import Exercises from "./Exercises";
const Home = () => {
  const [Bodypart, setBodypart] = useState(["all"]);
  const [exercises, setExercise] = useState([]);
  return (
    <Box>
      <Herobanner />
      <Search
        Bodypart={Bodypart}
        setBodypart={setBodypart}
        setExercise={setExercise}
      />
    </Box>
  );
};

export default Home;
