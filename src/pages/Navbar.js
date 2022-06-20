import { Stack } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [on, seton] = useState("");
  const handle = () => {
    seton(!on);
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      mt="40px"
      ml="70px"
      sx={{ gap: { sm: "122px", xs: "10px" }, justifyContent: "none" }}
    >
      <img
        src={logo}
        style={{ height: "48px", width: "48px", marginRight: "20px" }}
      />

      <Stack direction="row" gap="40px" fontSize="24px" alignment="flex-end">
        <a
          onClick={handle}
          style={{ color: "red", borderBottom: on ? "" : "3px solid #FF2625" }}
        >
          Home
        </a>
        <a
          onClick={handle}
          style={{ color: "red", borderBottom: on ? "3px solid #FF2625" : "" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
