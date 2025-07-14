import TrendProperties from "@/libs/components/homepage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PopularProperties from "@/libs/components/homepage/PopularProperties";

const Home: NextPage = () => {
  return (
    <>
      <Stack className="home-page">
        <TrendProperties />
        <PopularProperties />
        {/* <Advertisement />
        <TopProperties />
        <TopAgents /> */}
      </Stack>
    </>
  );
};

export default withLayoutMain(Home);
