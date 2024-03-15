import {
  Box,
  List,
  AppBar,
  Button,
  Toolbar,
  ListItem,
  IconButton,
  Typography,
  ListItemText,
  ListItemButton,
  SwipeableDrawer,
} from "@mui/material";
import { useState } from "react";
import Logo from "@/assets/images/Logo.png";
import MenuIcon from "@/assets/images/MenuIcon.svg";
import CloseIcon from "@/assets/images/CloseIcon.svg";
interface Props {
  window?: () => Window;
}
const drawerWidth = 240;
const navItems = [
  {
    id: "1",
    destination: "#contactMe",
    navName: "ارتباط با من",
  },
  {
    id: "2",
    destination: "#aboutMe",
    navName: "درباره من",
  },
  {
    id: "3",
    destination: "#workSamples",
    navName: "نمونه کارها",
  },
  {
    id: "4",
    destination: "#skills",
    navName: "مهارت ها",
  },
  {
    id: "5",
    destination: "#certificates",
    navName: "گواهینامه ها",
  },
  {
    id: "6",
    destination: "#",
    navName: "صفحه اصلی",
  },
];
const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "right" }} href={item.destination}>
              <ListItemText
                sx={{
                  color: "#ABB2BF",
                  "& .MuiListItemText-primary": {
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    height: "28px",
                    color: "#00B3FF",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    display: "inline-block",
                  }}
                >
                  #&nbsp;
                </Typography>
                {item.navName}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar
        component="nav"
        dir="ltr"
        sx={{
          minHeight: "80px",
          backgroundColor: "#282C33",
          justifyContent: "space-evenly",
          boxShadow: "0px 4px 20px 0px #00000040",
        }}
      >
        <Toolbar
          sx={{
            padding: "0",
            width: "100%",
            maxWidth: "lg",
            margin: "0 auto",
          }}
        >
          <Typography
            component="a"
            sx={{ flexGrow: 1, pl: { xs: "16px", md: "0" } }}
          >
            <Box
              component="img"
              src={Logo}
              sx={{
                width: "55px",
                height: "35px",
                display: "flex",
              }}
            />
          </Typography>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, pr: "16px" }}
          >
            <Box
              component="img"
              src={MenuIcon}
              sx={{ width: "30px", pt: "4px" }}
            ></Box>
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "16px" }}>
            {navItems.reverse().map((item) => (
              <Button
                key={item.id}
                href={item.destination}
                sx={{
                  padding: "5px 0",
                  color: "#ABB2BF",
                  fontSize: "1rem",
                  fontWeight: "500",
                  borderBottom: "3px solid transparent",
                  "&:hover": {
                    background: "transparent",
                    borderBottom: "3px solid #00B3FF",
                  },
                }}
              >
                {item.navName}
                <Typography
                  sx={{
                    height: "28px",
                    color: "#00B3FF",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  &nbsp;#
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <SwipeableDrawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          onOpen={() => setMobileOpen(true)}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              background: "#282C33",
              boxSizing: "border-box",
            },
          }}
        >
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              component="img"
              src={CloseIcon}
              onClick={() => setMobileOpen(false)}
              sx={{
                width: "24px",
                height: "24px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
            <Box
              component="img"
              src={Logo}
              sx={{
                width: "40px",
                height: "30px",
                display: "flex",
              }}
            />
          </Box>
          {drawer}
        </SwipeableDrawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </>
  );
};
export default Navbar;
