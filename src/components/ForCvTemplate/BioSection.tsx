import Dots from "@/assets/images/Dots.svg";
import BoyImage from "@/assets/images/Boy.png";
import Shape1 from "@/assets/images/Shap1.svg";
import { TypeAnimation } from "react-type-animation";
import FileResume from "../../../public/Reza_Gholami.pdf";
import DoubleQuotes from "@/assets/images/DoubleQuotes.svg";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
const BioSection = () => {
  const [buttonText, setButtonText] = useState("دانلود فایل رزومه !");
  const onClickHandler = () => {
    setButtonText("در حال دانلود ...");
    setTimeout(() => {
      setButtonText("دانلود شد!");
      setTimeout(() => {
        setButtonText("دانلود فایل رزومه !");
      }, 2000);
    }, 500);
  };
  return (
    <Box
      sx={{
        p: {
          xs: "30px 0",
          sm: "60px 0",
        },
      }}
    >
      <Grid
        container
        sx={{
          alignItems: "center",
          gap: { xs: "30px", md: "0" },
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid item xs={12} md={7} className="fadeInRight">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                mb: "32px",
                color: "#fff",
                fontSiza: "2rem",
                fontWeight: "600",
                textAlign: { xs: "center", md: "right" },
              }}
            >
              سلام ، من
              <Typography
                variant="h3"
                component="span"
                sx={{
                  color: "#C778DD",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                }}
              >
                &nbsp;رضاغلامی&nbsp;
              </Typography>
              هستم کارشناس کامپیوتر
              <br />و توسعه دهنده
              <Typography
                variant="h3"
                component="span"
                sx={{
                  color: "#C778DD",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                }}
              >
                &nbsp;فرانت اند
              </Typography>
            </Typography>
            <Typography
              sx={{
                mb: "24px",
                color: "#ABB2BF",
                lineHeight: "25px",
                fontSize: "1.1rem",
              }}
            >
              من وب‌سایت‌های واکنش‌گرا با فناوری های نوین وبا بروزترین تکنولوژی
              ایجاد می کنم !
            </Typography>
            <Button
              download
              href={FileResume}
              onClick={onClickHandler}
              className="button-animation"
              sx={{
                color: "#fff",
                padding: "10px 20px",
                margin: { xs: "0 auto", md: "0" },
                width: { xs: "100%", sm: "150px" },
              }}
            >
              {buttonText}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={Shape1}
              className="slideInLeft"
              sx={{
                zIndex: "-1",
                position: "absolute",
                left: { xs: "0px", lg: "0px" },
                top: { xs: "70px", lg: "65px" },
                width: { xs: "100px", lg: "auto" },
              }}
            />
            <Box component="img" src={BoyImage} sx={{ width: "400px" }}></Box>
            <Box
              component="img"
              src={Dots}
              className="slideInRight"
              sx={{
                position: "absolute",
                right: { xs: "0", lg: "45px" },
                bottom: { xs: "100px", lg: "130px" },
              }}
            />
          </Box>
          <Box
            sx={{
              p: "8px",
              gap: "10px",
              display: "flex",
              margin: "0 auto",
              alignItems: "center",
              background: "#282C33",
              justifyContent: "flex-end",
              border: "1px solid #ABB2BF",
              maxWidth: { xs: "100%", sm: "350px" },
              transform: {
                xs: "translate(0px, -10px)",
                sm: "translate(-25px, -10px)",
              },
            }}
          >
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1500,
                "Front",
                1500,
                "Front End",
                1500,
                "Front End Developer",
                3000,
                "Front End",
                1500,
                "Front End Developer",
              ]}
              speed={50}
              repeat={Infinity}
              style={{
                height: "22px",
                color: "#ABB2BF",
                fontWeight: "500",
                fontSize: "1.2rem",
                letterSpacing: "5px",
              }}
            />
            <Box sx={{ p: "8px", backgroundColor: "#fad201" }} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          alignItems: "flex-end",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "fit-content",
            position: "relative",
            border: "1px solid #ABB2BF",
            p: { xs: "15px", sm: "28px" },
            marginTop: { xs: "60px", sm: "120px" },
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <Box
            component="img"
            src={DoubleQuotes}
            sx={{
              top: "-10px",
              right: "15px",
              position: "absolute",
              background: "#282C33",
            }}
          />
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "500", color: "#fff" }}
          >
            با طراحی یک وب‌سایت منحصربه‌فرد ، پرقدرت دیده شوید !
          </Typography>
        </Grid>

        <Box
          sx={{
            color: "#fff",
            p: "15px 15px 5px",
            fontSize: "1.5rem",
            width: "fit-content",
            border: "1px solid #ABB2BF",
          }}
          className="textShadow"
        >
          <Box
            component="img"
            src={DoubleQuotes}
            sx={{
              position: "absolute",
              background: "#282C33",
              transform: "translate(-60px,-25px)",
            }}
          />
          WebShip.ir
        </Box>
      </Grid>
    </Box>
  );
};
export default BioSection;
