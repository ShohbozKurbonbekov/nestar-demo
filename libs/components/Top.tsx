import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Top = () => {
  return (
    <Stack className="navbar">
      <Stack className="navbar-main">
        <Stack className="container">
          {/* left side of the navbar */}
          <Box className="logo-box" component={"div"}>
            <Link href="/">
              <img src="/img/logo/logoWhite.svg" alt="logo image here" />
            </Link>
          </Box>

          {/* Middle of the navbar */}
          <Box className="router-box" component={"div"}>
            <Link href="/">
              <div>Home</div>
            </Link>
            <Link href="/property">
              <div>Properties</div>
            </Link>
            <Link href="/agent">
              <div>Agents</div>
            </Link>
            <Link href="/community?articleCategory=FREE">
              <div>Community</div>
            </Link>
            <Link href="/cs">
              <div>CS</div>
            </Link>
          </Box>

          {/* right side of the navbar */}
          <Box className="user-box" component={"div"}>
            <>
              <div className="login-user">
                <AccountCircleRoundedIcon
                  className="navbar-profile"
                  sx={{
                    backgroundColor: "white",
                    height: "42px",
                    width: "42px",
                    borderRadius: "50%",
                  }}
                />
              </div>

              <Menu id="basic-menu" sx={{ mt: "5px" }} open={false}>
                <MenuItem>
                  <LogoutIcon
                    fontSize="small"
                    style={{ color: "blue", marginRight: "10px" }}
                  />
                  Logout
                </MenuItem>
              </Menu>
            </>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Top;
