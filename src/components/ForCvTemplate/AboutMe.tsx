import Heading from "./Heading";
import Boy2 from "@/assets/images/Boy2.png";
import Dots from "@/assets/images/Dots.svg";
import Dots2 from "@/assets/images/Dots2.svg";
import { Typography, Box, Grid } from "@mui/material";
const AboutMe = () => {
  return (
    <>
      <Heading title="درباره من" borderWidth="55%" id="aboutMe" />
      <Grid
        container
        sx={{
          p: { xs: "50px 0", md: "0" },
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "relative",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: "30px", md: "0" },
        }}
      >
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
          }}
        >
          <Typography
            sx={{
              lineHeight: "26px",
              color: "#ABB2BF",
              textAlign: { xs: "center", sm: "justify" },
            }}
          >
            سلام ، من رضا هستم !
            <br />
            <br />
            فارغ التحصیل رشته کامپیوتر با معدل الف از دانشگاه دولتی تربت حیدریه
            <br />
            <br />
            علاقه‌مند به ساخت رابط‌های کاربری زیبا، واکنش‌پذیر و کارآمد برای
            وبسایت‌ها و اپلیکیشن‌های مختلف هستم.
            <br />
            <br />
            همواره به دنبال یادگیری و بهبود مهارت‌هایم در زمینه برنامه‌نویسی وب
            هستم، تا بتوانم بهترین نسخه خودم را به عنوان یک برنامه‌نویس
            فرانت‌اند ارائه دهم.
            <br />
            <br />
            من یک برنامه‌نویس فرانت اند با اشتیاق بالا و علاقه‌مند به طراحی رابط
            کاربری زیبا هستم. به بهبود تجربه کاربری وب و ایجاد وبسایت‌های
            قدرتمند و جذاب علاقه فراوان دارم.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            width: { xs: "70%", md: "auto" },
          }}
        >
          <Box sx={{ position: "relative", width: { xs: "100%", sm: "auto" } }}>
            <Box
              component="img"
              src={Boy2}
              sx={{
                transform: "scale(-1,1)",
                objectFit: "contain",
                width: { xs: "100%", md: "300px" },
                height: { xs: "300px", md: "auto" },
              }}
            />

            <Box
              component="img"
              src={Dots}
              className="slideInRightMin"
              sx={{
                position: "absolute",
                left: { xs: "-10px", md: "30px" },
                top: { xs: "30px", md: "50px" },
                zIndex: "-1",
              }}
            />
            <Box
              component="img"
              src={Dots2}
              sx={{
                position: "absolute",
                bottom: "50px",
                right: "30px",
              }}
              className="slideInUp"
            />
            <Box
              sx={{
                width: { xs: "100%", md: "100%" },
                height: "2px",
                background: "#C778DD",
                transform: {
                  xs: "translate(0px, -10px)",
                  sm: "translate(-0px, -10px)",
                },
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default AboutMe;
