import React, { useState, useEffect } from "react";

import { Box, Stack, Button, Typography, TextField } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { fetchData, exerciseoptions } from "../assets/FetchData/FetchData";

const Search = ({ Bodypart, setBodypart, setExercise }) => {
  const [search, setsearch] = useState("");
  const [ex, setex] = useState([]);
  const [exer, setexer] = useState([]);
  const [bodypart, setbodypart] = useState([]);

  useEffect(() => {
    const fetchexerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseoptions
      );

      setbodypart(["all", ...bodyPartsData]);
    };
    fetchexerciseData();
  }, []);
  const btnsam = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseoptions
      );
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search) ||
          ex.target.toLowerCase().includes(search) ||
          ex.equipment.toLowerCase().includes(search) ||
          ex.bodyPart.toLowerCase().includes(search)
      );
      console.log(searchedExercises);
      setsearch("");
      setex(searchedExercises);
      setexer(exercisesData);
    }
  };

  return (
    <Stack alignItems="center" sx={{ mt: { lg: "600px", xs: "50px" } }}>
      <Typography fontSize="35px" fontWeight="600">
        Search Exercises here
      </Typography>
      <Box position="relative" mt="50px">
        <TextField
          style={{ height: "20px" }}
          value={search}
          type="text"
          placeholder="Search here"
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          sx={{ width: { lg: "800px", xs: "300px" } }}
        />
        <Button
          onClick={btnsam}
          variant="contained"
          color="error"
          style={{ height: "50px", width: "16vw", marginLeft: "20px" }}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ p: "20px", position: "relative", width: "100%" }} mt="50px">
        <HorizontalScrollBar
          data={bodypart}
          Bodypart={Bodypart}
          setBodypart={setBodypart}
        />
      </Box>
      <Typography fontSize="30px" fontWeight="600" mt="30px" mb="30px">
        Results
      </Typography>
      <Box>
        <Stack direction="row" flexWrap="wrap">
          {ex.map((items, i) => {
            if (i < 400)
              return (
                <Box
                  key={items.id}
                  borderTop="4px solid red"
                  margin="5px"
                  mt="20px"
                >
                  <img src={items.gifUrl} direction="row" />
                  <Typography
                    fontSize="20px"
                    fontweight="400"
                    textTransform="capitalize"
                  >
                    {items.bodyPart}
                  </Typography>
                  <Typography
                    fontSize="10px"
                    fontweight="400"
                    textTransform="capitalize"
                  >
                    {items.name}
                  </Typography>
                </Box>
              );
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Search;
