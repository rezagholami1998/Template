import {
  List,
  Box,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import TickIcon from "../../assets/images/Tick.svg";
import { useInView } from "react-intersection-observer";
const certificateItem = [
  "کارشناسی مهندسی کامپیوتر دانشگاه دولتی تربت حیدریه",
  "سرتیفیکیت کالج توربو فرانت شرکت نرم افزاری پارت",
  "سرتیفیکیت دوره فنی حرفه ای Ciw موسسه راشد",
];
const Certificate = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Typography
          variant="h5"
          component="h3"
          id="certificates"
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
          گواهینامه ها
        </Typography>
        <Box sx={{ width: "100%", height: "1px", background: "#C778DD" }}></Box>
      </Box>
      <Box
        ref={ref}
        sx={{
          p: "50px 0",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <List sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {certificateItem.map((text, i) => (
            <motion.div
              key={i}
              initial={{ x: -350 }}
              animate={inView ? { x: 0 } : { x: -350 }}
              transition={{ duration: 1, delay: i * 0.5 }}
              style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
            >
              <ListItemIcon
                sx={{
                  "&.MuiListItemIcon-root": {
                    minWidth: "30px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={TickIcon}
                  sx={{ color: "#C778DD", width: "100%" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ textAlign: "right", fontSize: "1.2rem", color: "#fff" }}
              />
            </motion.div>
          ))}
        </List>
      </Box>
    </>
  );
};
export default Certificate;
