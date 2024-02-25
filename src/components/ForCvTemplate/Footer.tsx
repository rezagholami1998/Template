import Email from "@/assets/images/Email.svg";
import GitHub from "@/assets/images/Github.svg";
import Discord from "@/assets/images/Discord.svg";
import { Instagram, Telegram, WhatsApp } from "@mui/icons-material";
import { Box, Link, Stack, Button, Tooltip, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box sx={{ padding: "50px 0" }} id="contactMe">
      <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "#C778DD",
          }}
        ></Box>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: "#fff",
            fontWeight: "500",
            textWrap: "nowrap",
            fontSize: "1.5rem",
          }}
        >
          ارتباط با من
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "#C778DD",
          }}
        ></Box>
      </Box>
      <Stack
        direction="row"
        className="fadeIn"
        sx={{
          width: "100%",
          alignItems: "center",
          padding: "50px 0 20px",
          gap: { xs: "0", sm: "30px" },
          justifyContent: { xs: "space-evenly", sm: "center" },
        }}
      >
        <Tooltip title="Discord" arrow placement="top">
          <Link href="http://discord.gg/rezagholami1998">
            <Box
              component="img"
              src={Discord}
              sx={{ width: "30px", height: "30px" }}
            />
          </Link>
        </Tooltip>
        <Tooltip title="Instagram" arrow placement="top">
          <Link href="https://instagram.com/webship.ir">
            <Box
              component={Instagram}
              sx={{ color: "#ABB2BF", fontSize: "2.2rem" }}
            />
          </Link>
        </Tooltip>
        <Tooltip title="Email" arrow placement="top">
          <Link href="mailto:reza.gholami.m.1998@gmail.com">
            <Box
              component="img"
              src={Email}
              sx={{ width: "30px", height: "30px" }}
            />
          </Link>
        </Tooltip>
        <Tooltip title="GitHub" arrow placement="top">
          <Link href="https://github.com/rezagholami1998/">
            <Box
              component="img"
              src={GitHub}
              sx={{ width: "30px", height: "30px" }}
            />
          </Link>
        </Tooltip>
        <Tooltip title="Telegram" arrow placement="top">
          <Link href="http://telegram.me/reza_gholami_1998">
            <Box
              component={Telegram}
              sx={{ color: "#ABB2BF", fontSize: "2.4rem" }}
            />
          </Link>
        </Tooltip>
        <Tooltip title="WhatsApp" arrow placement="top">
          <Link href="https://wa.me/09038355685">
            <Box
              component={WhatsApp}
              sx={{ color: "#ABB2BF", fontSize: "2.2rem" }}
            />
          </Link>
        </Tooltip>
      </Stack>
      <Box
        sx={{
          width: "1px",
          height: "70px",
          margin: "0 auto",
          background: "#C778DD",
        }}
      ></Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          href="tel:09038355685"
          sx={{
            mt: "20px",
            width: "100%",
            color: "#ABB2BF",
            maxWidth: "250px",
            border: "1px solid #C778DD",
            "&:hover": {
              border: "1px solid #C778DD",
              transition: "all 0.2s ease-in-out",
              color: "#fff",
              boxShadow: "0px 0px 6px 1px #c778dd",
            },
          }}
        >
          تماس با من
        </Button>
      </Box>
    </Box>
  );
};
export default Footer;
