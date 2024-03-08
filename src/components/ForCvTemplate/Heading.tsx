import { Box, Typography } from "@mui/material";
const Heading = ({ title = "", borderWidth = "0", id = "" }) => {
  return (
    <Box id={id} sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
        <Typography
          component="span"
          sx={{
            height: "28px",
            color: "#C778DD",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          #&nbsp;
        </Typography>
        {title}
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", sm: `${borderWidth}` },
          height: "1px",
          background: "#C778DD",
        }}
      ></Box>
    </Box>
  );
};
export default Heading;
