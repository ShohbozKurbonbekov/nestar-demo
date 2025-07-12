import { Box, Stack } from "@mui/material";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

const HeaderFilter = () => {
  return (
    <Stack className="search-box">
      <Stack className="select-box">
        <Box className="box on" component={"div"}>
          <span> Location</span>
          <ExpandMoreTwoToneIcon />
        </Box>
        <Box className="box" component={"div"}>
          <span> Property Type</span>
          <ExpandMoreTwoToneIcon />
        </Box>
        <Box className="box" component={"div"}>
          <span> 7 rooms</span>
          <ExpandMoreTwoToneIcon />
        </Box>
      </Stack>
      <Stack className="search-box-other">
        <Box className="advanced-filter">
          <img src="/img/icons/tune.svg" alt="" />
          <span>Advanced</span>
        </Box>
        <Box className="search-btn">
          <img src="/img/icons/search_white.svg" alt="" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default HeaderFilter;
