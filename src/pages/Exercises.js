import React, { useEffect, useState } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { fetchData, exerciseoptions } from "../assets/FetchData/FetchData";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const Exercises = ({ exercises, setexercises, Bodypart }) => {
  console.log(exercises);
  return (
    <Box id="exercise" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="43px">
        Showing Result
      </Typography>
    </Box>
  );
};

export default Exercises;
