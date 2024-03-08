import Heading from "./Heading";
import { Typography, Box, Grid } from "@mui/material";
import GroupShape from "@/assets/images/Group-shape.svg";
const Skills = () => {
  return (
    <>
      <Heading title="مهارت ها" borderWidth="85%" id="skills" />
      <Grid
        container
        sx={{
          p: "50px 0",
          alignItems: "center",
          position: "relative",
          justifyContent: "space-evenly",
        }}
      >
        <Grid item xs={12} md={8} container sx={{ gap: "16px" }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Box sx={{ border: "1px solid #ABB2BF" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  padding: "8px",
                  fontWeight: "600",
                  lineHeight: "21px",
                  borderBottom: "1px solid #ABB2BF",
                }}
              >
                زبان
              </Typography>
              <Typography
                sx={{
                  padding: "8px",
                  color: "#ABB2BF",
                  textAlign: "left",
                  lineHeight: "21px",
                }}
              >
                JavaScript
              </Typography>
              <Typography
                sx={{
                  padding: "8px",
                  color: "#ABB2BF",
                  textAlign: "left",
                  lineHeight: "21px",
                }}
              >
                TypeScript
              </Typography>
            </Box>
            <Box sx={{ border: "1px solid #ABB2BF", textAlign: "left" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  padding: "8px",
                  fontWeight: "600",
                  textAlign: "right",
                  lineHeight: "21px",
                  borderBottom: "1px solid #ABB2BF",
                }}
              >
                فریمورک ها
              </Typography>
              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                React Js
              </Typography>
              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                Mui
              </Typography>
              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                Tailwind Css
              </Typography>
              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                Bootstrap v4,v5
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Box sx={{ border: "1px solid #ABB2BF", textAlign: "left" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  padding: "8px",
                  fontWeight: "600",
                  textAlign: "right",
                  lineHeight: "21px",
                  borderBottom: "1px solid #ABB2BF",
                }}
              >
                بقیه موارد
              </Typography>
              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                Html
              </Typography>
              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                Css
              </Typography>

              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                Flex & Grid
              </Typography>

              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                Responsive Design
              </Typography>
            </Box>
            <Box sx={{ border: "1px solid #ABB2BF", textAlign: "left" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  padding: "8px",
                  fontWeight: "600",
                  lineHeight: "21px",
                  textAlign: "right",
                  borderBottom: "1px solid #ABB2BF",
                }}
              >
                پیش پردازنده
              </Typography>
              <Typography
                sx={{ padding: "8px", lineHeight: "21px", color: "#ABB2BF" }}
              >
                Sass
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ border: "1px solid #ABB2BF" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  padding: "8px",
                  fontWeight: "600",
                  lineHeight: "21px",
                  borderBottom: "1px solid #ABB2BF",
                }}
              >
                ابزارها
              </Typography>
              <Typography
                sx={{
                  padding: "8px",
                  color: "#ABB2BF",
                  textAlign: "left",
                  lineHeight: "21px",
                }}
              >
                Git
              </Typography>
              <Typography
                sx={{
                  padding: "8px",
                  color: "#ABB2BF",
                  textAlign: "left",
                  lineHeight: "21px",
                }}
              >
                Figma
              </Typography>
              <Typography
                sx={{
                  padding: "8px",
                  color: "#ABB2BF",
                  textAlign: "left",
                  lineHeight: "21px",
                }}
              >
                VsCode
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { xs: "none", md: "block", textAlign: "left" } }}
        >
          <Box component="img" src={GroupShape} />
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
