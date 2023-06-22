import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../assets/logo.jpg";

const Headers = () => {
  return (
    <AppBar color="transparent" position="sticky">
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 30 }} />
        <Typography variant="body1" marginLeft="10px">
          EverNote
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Headers;
