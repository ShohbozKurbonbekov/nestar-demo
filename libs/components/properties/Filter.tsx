import { RefreshOutlined } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

type PriceLimit = {
  start: number;
  end: number;
};

const Filter = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [propertyPrice, setPropertyPrice] = useState<PriceLimit>({
    start: 0,
    end: 250000,
  });

  return (
    <Stack className="filter-main">
      <Stack className="find-your-home" mb={"40px"}>
        <Typography className="title-main">Find Your Home</Typography>
        <Stack className={"input-box"}>
          <OutlinedInput
            type={"text"}
            value={searchText}
            className={"search-input"}
            placeholder="what are you looking for?"
            onChange={(e: any) => setSearchText(e.target.value)}
          />

          <img src={"/img/icons/search_icon.png"} alt="" />
          <Tooltip title={"Reset"} children="">
            <IconButton>
              <RefreshOutlined />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      <Stack className="find-your-home " mb={"30px"}>
        <p
          className="title"
          style={{
            textShadow: "0px 3px 4px #b9b9b9",
          }}
        >
          Location
        </p>
        <Stack
          className="property-location"
          style={{
            height: showMore ? "253px" : "115px",
          }}
        >
          {["SEOUL", "BUSAN", "DAEGU"].map(
            (location: string, index: number) => (
              <Stack className="input-box" key={index}>
                <Checkbox
                  id={location}
                  className="property-checkbox"
                  color="default"
                  size="small"
                  value={location}
                  checked={false}
                />
                <label htmlFor={location} style={{ cursor: "pointer" }}>
                  <Typography className="property-type">{location}</Typography>
                </label>
              </Stack>
            )
          )}
        </Stack>
      </Stack>

      <Stack className="find-your-home " mb={"30px"}>
        <p
          className="title"
          style={{
            textShadow: "0px 3px 4px #b9b9b9",
          }}
        >
          Property Type
        </p>

        {["Apartment", "House", "Villa"].map(
          (location: string, index: number) => (
            <Stack className="input-box" key={index}>
              <Checkbox
                id={location}
                className="property-checkbox"
                color="default"
                size="small"
                value={location}
                checked={false}
              />
              <label htmlFor={location} style={{ cursor: "pointer" }}>
                <Typography className="property-type">{location}</Typography>
              </label>
            </Stack>
          )
        )}
      </Stack>

      <Stack className="find-your-home " mb={"30px"}>
        <p className="title">Rooms</p>
        <Stack
          className="button-group "
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Button
            sx={{
              borderRadius: "12px 0 0 12px",
              border: "1px solid #b9b9b9",
            }}
          >
            Any
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9",
            }}
          >
            1
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "2px solid #181a20",
            }}
          >
            2
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9",
            }}
          >
            3
          </Button>

          <Button
            sx={{
              borderRadius: 0,
              border: "2px solid #181a20",
            }}
          >
            4
          </Button>

          <Button
            sx={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid #b9b9b9",
            }}
          >
            5+
          </Button>
        </Stack>
      </Stack>

      <Stack className="find-your-home " mb={"30px"}>
        <p className="title">Bedrooms</p>
        <Stack className="button-group">
          <Button
            sx={{
              borderRadius: "12px 0 0 12px",
              border: "1px solid #b9b9b9",
            }}
          >
            Any
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9",
            }}
          >
            1
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "2px solid #181a20",
            }}
          >
            2
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9",
            }}
          >
            3
          </Button>

          <Button
            sx={{
              borderRadius: 0,
              border: "2px solid #181a20",
            }}
          >
            4
          </Button>

          <Button
            sx={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid #b9b9b9",
            }}
          >
            5+
          </Button>
        </Stack>
      </Stack>

      <Stack className="find-your-home " mb={"30px"}>
        <p
          className="title"
          style={{
            textShadow: "0px 3px 4px #b9b9b9",
          }}
        >
          Options
        </p>
        <Stack className="input-box">
          <Checkbox
            id={"Barter"}
            className="property-checkbox"
            color="default"
            size="small"
            value={"propertyBarter"}
          />
          <label
            htmlFor="Barter"
            style={{
              cursor: "pointer",
            }}
          >
            <Typography className="property-type">Barter</Typography>
          </label>
        </Stack>

        <Stack className="input-box">
          <Checkbox
            id={"Rent"}
            className="property-checkbox"
            color="default"
            size="small"
            value={"propertyRent"}
          />
          <label
            htmlFor="Rent"
            style={{
              cursor: "pointer",
            }}
          >
            <Typography className="property-type">Rent</Typography>
          </label>
        </Stack>
      </Stack>

      <Stack className="find-your-home" mb="30px">
        <p
          className="title"
          style={{
            textShadow: "0px 3px 4px #b9b9b9",
            marginBottom: "10px",
          }}
        >
          Square Meter
        </p>
        <Stack className="square-year-input">
          <FormControl>
            <InputLabel id="demo-simple-label">Min</InputLabel>
            <Select
              labelId="demo-simple-label"
              id="demo-simple-select"
              value={0}
              label="Min"
            >
              {[0, 1, 2, 3, 4, 5, 6].map((num: number) => (
                <MenuItem value={num} key={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="central-divider"></div>
          <FormControl>
            <InputLabel id="demo-simple-label">Max</InputLabel>
            <Select
              labelId="demo-simple-label"
              id="demo-simple-select"
              value={500}
              label="Max"
            >
              {[0, 1, 2, 3, 4, 5, 6].map((num: number) => (
                <MenuItem value={num} key={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      <Stack className="find-your-home" mb="30px">
        <p
          className="title"
          style={{
            textShadow: "0px 3px 4px #b9b9b9",
            marginBottom: "10px",
          }}
        >
          Price Range
        </p>
        <Stack className="square-year-input">
          <input
            type="number"
            placeholder="$ min"
            min={0}
            value={propertyPrice?.start ?? 0}
            onChange={(e: any) => {
              if (e.target.value >= 0) {
                setPropertyPrice({ ...propertyPrice, start: e.target.value });
              }
            }}
          />
          <div className="central-divider"></div>

          <input
            type="number"
            placeholder="$ max"
            value={propertyPrice?.end ?? 0}
            onChange={(e: any) => {
              if (e.target.value >= 0) {
                setPropertyPrice({ ...propertyPrice, end: e.target.value });
              }
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
