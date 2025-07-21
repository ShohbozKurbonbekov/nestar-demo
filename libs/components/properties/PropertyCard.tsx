import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";

const PropertyCard = () => {
  const imagePath: string = "/img/banner/header1.svg";
  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link
          href={{
            pathname: "/property/detail",
            query: {
              id: "test257298",
            },
          }}
        >
          <img src={imagePath} alt="" />
        </Link>
        <Box className="top-badge">
          <img src="/img/icons/electricity.svg" alt="" />
          <Typography>Top</Typography>
        </Box>
        <Box className="price-box">
          <Typography>$250000</Typography>
        </Box>
      </Stack>
      <Stack className="bottom">
        <Stack className="name-address">
          <Stack className="name">
            <Link
              href={{
                pathname: "/property/detail",
                query: {
                  id: "test257298",
                },
              }}
            >
              <Typography>Kingstone apartmensd</Typography>
            </Link>
          </Stack>
          <Stack className="address">
            <Typography>Busan , city center 200 - 5</Typography>
          </Stack>
        </Stack>
        <Stack className="options">
          <Stack className="option">
            <img src="/img/icons/bed.svg" alt="" />
            <Typography>2 Beds</Typography>
          </Stack>

          <Stack className="option">
            <img src="/img/icons/room.svg" alt="" />
            <Typography> 7 rooms</Typography>
          </Stack>

          <Stack className="option">
            <img src="/img/icons/expand.svg" alt="" />
            <Typography>170 m2</Typography>
          </Stack>
        </Stack>
        <Stack className="divider"></Stack>
        <Stack className="type-buttons">
          <Stack className="type">
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "13px",
              }}
            >
              Rent
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>

          <Stack className="buttons">
            <IconButton color="default">
              <RemoveRedEye />
            </IconButton>
            <Typography
              className="view-cnt"
              sx={{ fontWeight: 500, fontSize: "13px" }}
            >
              100
            </Typography>
            <IconButton color="default">
              <Favorite color="primary" />
            </IconButton>
            <Typography className="view-cnt">20</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;
