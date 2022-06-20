import { Box } from "@mui/system";
import React from "react";
import Bodypart from "./Bodypart";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const HorizontalScrollBar = ({ data }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <Bodypart item={item} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
