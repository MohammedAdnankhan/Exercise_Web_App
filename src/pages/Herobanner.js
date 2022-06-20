import { Box, Button, Typography } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import banner from "../assets/images/banner.png";
import "./Media.css";
const Herobanner = () => {
  return (
    <Box className="B1">
      <Box
        sx={{
          mt: { lg: "80px", xs: "70px" },
          ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography fontWeight="600px" color="#FF2625" fontSize="26px">
          Fitnessclub
        </Typography>

        <Typography
          fontWeight="700px"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="16px" lineHeight="26px" mb={"22px"}>
          Check out the most effective exercises
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF2625", borderRadisu: "10px" }}
        >
          Expolore Exercises
        </Button>
      </Box>
      <Box>
        <img
          className="img1"
          src={banner}
          style={{
            position: "absolute",
            right: "40px",
            top: "0px",
            marginTop: "0",
          }}
        />
      </Box>
    </Box>
  );
};

export default Herobanner;
