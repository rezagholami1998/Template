import Heading from "./Heading";
import { motion } from "framer-motion";
import TickIcon from "../../assets/images/Tick.svg";
import { useInView } from "react-intersection-observer";
import { List, Box, ListItemIcon, ListItemText } from "@mui/material";
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
      <Heading title="گواهینامه ها" borderWidth="100%" id="certificates" />
      <Box
        ref={ref}
        sx={{
          p: "50px 0",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <List sx={{ display: "flex", flexDirection: "column", gap: "35px" }}>
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
                  sx={{ color: "#00B3FF", width: "100%" }}
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
