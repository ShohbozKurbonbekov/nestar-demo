import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/properties/Filter";
import PropertyCard from "@/libs/components/properties/PropertyCard";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const PropertyList: NextPage = () => {
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  return (
    <div id="property-list-page">
      <Stack className="container">
        <Box className="right">
          <span className="right-title">Sort By</span>
          <Button endIcon={<ArrowDropDownIcon />}>New</Button>
        </Box>

        <Stack className="property-page">
          <Stack className="filter-config">
            <Filter />
          </Stack>
          <Stack className="main-config" mb={"76px"}>
            <Stack className="list-config">
              {properties.map((property, index) => (
                <PropertyCard key={index} />
              ))}
            </Stack>
            <Stack className="pagination-config">
              <Stack className="pagination-box">
                <Pagination
                  page={1}
                  count={5}
                  shape="circular"
                  color="primary"
                />
              </Stack>
              <Stack className="total-result">
                <Typography>Total 5 properties available</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};
export default withLayoutBasic(PropertyList);
