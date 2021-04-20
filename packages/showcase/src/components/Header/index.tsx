import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import Logo from "./react-sketch-logo.jpg";
import { Config } from "../../stores/config";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

const Header = (props: Config): JSX.Element => {
  const classes = useStyles();
  return (
    <AppBar title="Sketch Tool" position="static">
      <Toolbar>
        <Avatar alt="Remy Sharp" src={Logo} className={classes.avatar} />
        <Typography variant="h5" color="inherit" style={{ flexGrow: 1 }}>
          Sketch Tool
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
export default Header;
