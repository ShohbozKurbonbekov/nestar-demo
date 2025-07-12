import { Box, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Stack className="footer-container">
      <Stack className="main">
        <Stack className="left">
          <Box className="footer-box" component={"div"}>
            <img src="/img/logo/logoWhite.svg" alt="" className="logo" />
          </Box>
          <Box className="footer-box" component={"div"}>
            <span>Total free customer care</span>
            <p>+82101234567</p>
          </Box>
          <Box className="footer-box">
            <span>Nee live Support</span>
            <p>82101234567</p>
          </Box>
          <Box className="footer-box">
            <p> follow us on social media</p>
            <div className="media-box">
              <FacebookOutlinedIcon />
              <TelegramIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </Box>
        </Stack>
        <Stack className="right">
          <Box className="top" component={"div"}>
            <strong>Keep yourself up to date</strong>
            <div>
              <input type="text" placeholder="Your Email" />
              <span>Subscribe</span>
            </div>
          </Box>
          <Box className="bottom" component={"div"}>
            <div>
              <strong>Popular Search</strong>
              <span>Property for Rent</span>
              <span>Property Low to hide</span>
            </div>
            <div>
              <strong>Quick Links</strong>
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
              <span>Pricing Plans</span>
              <span>Our Service</span>
              <span>Contact Support</span>
              <span>FAQs</span>
            </div>
            <div>
              <strong> Discover</strong>
              <span>Seoul</span>
              <span>Gyeongido</span>
              <span>Busan</span>
              <span>Jejudo</span>
            </div>
          </Box>
        </Stack>
      </Stack>

      <Stack className="second">
        <span>© Nestar - All rights reserved. Nestar 2024 </span>

        <span>Privacy · Terms · Sitemap</span>
      </Stack>
    </Stack>
  );
};

export default Footer;
