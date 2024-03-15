import {
  Box,
  List,
  Stack,
  Button,
  ListItem,
  Typography,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import Heading from "./Heading";
import TickIcon from "../assets/images/Tick.svg";
import Mobile from "../assets/images/Mobile.png";
import LapTop from "../assets/images/LapTop.png";
import Carousel from "react-material-ui-carousel";
import Daroghe from "../assets/images/Daroghe.png";
import Tagstar from "../assets/images/TagStar.png";
import EmdadKhodro from "../assets/images/EmdadKhodro.png";
import ClickDigikala from "../assets/images/ClickDigikala.png";
import TagstarResponsive from "../assets/images/TagstarResponsive.png";
import DarogheResponsive from "../assets/images/DarogheResponsive.png";
import DigikalaResponsive from "../assets/images/DigikalaResponseive.png";
import EmdadkhodroResponsive from "../assets/images/EmdadkhodroResponsive.png";
const workSamplesItems = [
  {
    id: 1,
    title: "پایگاه خبری داروغه",
    img: Daroghe,
    imgResponsive: DarogheResponsive,
    link: "#",
    pages: [
      "صفحه اصلی",
      "Rss",
      "سیاسی",
      "آرشیو",
      "اقتصادی",
      "درباره ما",
      "هواشناسی",
      "تماس با ما",
      "اوقات شرعی",
    ],
  },
  {
    id: 2,
    title: "امداد خودرو اعتماد",
    img: EmdadKhodro,
    link: "https://emdadkhodroetemad.ir/",
    imgResponsive: EmdadkhodroResponsive,
    pages: [
      "صفحه اصلی",
      "تصاویر",
      "استخدام",
      "درباره ما",
      "خدمات ما",
      "تماس با ما",
      "استعلام مجوز",
    ],
  },
  {
    id: 3,
    title: "لندینگ پیج تگ استار",
    img: Tagstar,
    link: "https://webship.ir/tagstar",
    imgResponsive: TagstarResponsive,
    pages: ["صفحه اصلی", "خدمات", "مشتریان", "درباره ما", "تماس با ما"],
  },
  {
    id: 4,
    title: "شرکت نرم افزاری کلیک",
    img: ClickDigikala,
    link: "https://clickmis.net/digikala",
    imgResponsive: DigikalaResponsive,
    pages: [
      "دیجی کالا",
      "صفحه 404",
      "محتوای مستندات Api",
      "راهنمای خودآموز و مستندات",
    ],
  },
];
const WorkSamples = () => {
  const smallSize = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Heading title="نمونه کارها" borderWidth="70%" id="workSamples" />
      <Carousel
        swipe={false}
        indicators={smallSize ? false : true}
        navButtonsAlwaysVisible
        navButtonsAlwaysInvisible={smallSize ? false : true}
        navButtonsWrapperProps={{
          style: {
            display: "inline-flex",
            height: "40px",
            top: "380px",
          },
        }}
        navButtonsProps={{
          style: {
            background: "#fad201",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: "#00B3FF",
            opacity: 0.5,
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "30px",
            position: "relative",
            zIndex: "1000",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#00B3FF",
            opacity: "1",
          },
        }}
        sx={{ padding: "50px 0" }}
      >
        {workSamplesItems.map((workSample) => (
          <Box
            sx={{
              display: "grid",
              gap: { xs: "100px", md: "0" },
              gridTemplateColumns: { xs: "1fr", md: "2fr 4fr" },
            }}
            key={workSample.id}
          >
            <Stack
              sx={{
                gap: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                order: { xs: "2", md: "1" },
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  gap: "5px",
                  color: "#fff",
                  display: "flex",
                  fontWeight: "700",
                  textWrap: "nowrap",
                  fontSize: "1.5rem",
                  alignItems: "center",
                }}
              >
                طراحی سایت
                <Typography
                  component="span"
                  sx={{
                    color: "#00B3FF",
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    textWrap: "nowrap",
                  }}
                >
                  {workSample.title}
                </Typography>
              </Typography>
              <List
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: workSample.pages.length <= 4 ? "1fr" : "repeat(2,1fr)",
                  },
                }}
              >
                {workSample.pages.map((name) => (
                  <ListItem disablePadding sx={{ alignItems: "center" }}>
                    <ListItemButton
                      sx={{
                        gap: "8px",
                        display: "flex",
                        alignItems: "flex-start",
                        paddingX: 0,
                        "&:hover": {
                          background: "none",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          "&.MuiListItemIcon-root": {
                            minWidth: "25px",
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
                        primary={name}
                        sx={{
                          color: "#fff",
                          textAlign: "right",
                          fontSize: "1.2rem",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Button
                href={workSample.link}
                target="_blank"
                className="button-animation"
                sx={{
                  color: "#fff",
                  padding: "10px 20px",
                  width: { xs: "auto", md: "150px" },
                  margin: { xs: "0 5px", sm: "0 5px 0 0" },
                }}
              >
                نمایش سایت
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Button>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: { xs: "center", md: "end" },

                order: { xs: "1", md: "2" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "end",
                  position: "relative",
                  justifyContent: { xs: "center", md: "end" },
                }}
              >
                <Box
                  sx={{
                    bottom: "0",
                    zIndex: "2",
                    overflow: "hidden",
                    width: { xs: "100px", sm: "140px" },
                    right: { xs: "-9px", sm: "-50px" },
                    height: { xs: "230px", sm: "300px" },
                    position: { xs: "absolute", md: "relative" },
                    transform: {
                      xs: "",
                      md: "translate(15px, -25px) skew(25deg, -25deg)",
                    },
                  }}
                >
                  <Box
                    src={Mobile}
                    component="img"
                    sx={{ position: "absolute", width: "100%", height: "100%" }}
                  />
                  <Box
                    sx={{
                      overflow: "hidden",
                      textAlign: "right",
                      position: "relative",
                      width: { xs: "92px", sm: "128px" },
                      height: { xs: "215px", sm: "280px" },
                      borderRadius: { xs: "7px", sm: "12px" },
                      margin: { xs: "8px auto 0", sm: "10px auto 0" },
                      "&:hover img": {
                        objectPosition: "bottom center",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={workSample.imgResponsive}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: " top center",
                        transition: "all 7s ease-in-out",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    overflow: "hidden",
                    position: "relative",
                    width: { xs: "290px", sm: "400px" },
                    height: { xs: "300px", sm: "400px" },
                  }}
                >
                  <Box
                    component="img"
                    src={LapTop}
                    sx={{ position: "absolute", width: "100%", height: "100%" }}
                  />
                  <Box
                    sx={{
                      textAlign: "right",
                      position: "relative",
                      width: { xs: "293px", sm: "400px" },
                      height: { xs: "217px", sm: "285px" },
                      overflow: "hidden",
                      "&:hover img": {
                        objectPosition: "bottom center",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={workSample.img}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: " top center",
                        padding: "14px 11px 15px 15px",
                        transition: "all 4s ease-in-out",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        ))}
      </Carousel>
    </>
  );
};
export default WorkSamples;
