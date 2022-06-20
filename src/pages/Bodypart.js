import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import icon from "../assets/icons/gym.png";

const Bodypart = ({ item, setBodypart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: "4px solid red",
        background: "#ffff",
        width: "270px",
        height: "280px",
        gap: "50px",
      }}
      onClick={() => {
        setBodypart(item);
      }}
    >
      <img src={icon} style={{ width: "80px" }} />
      <Typography fontSize="24px" fontWeight="600" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default Bodypart;
