import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Badge from "@material-ui/core/Badge";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0",
    zIndex: "100",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  title: {
    flexGrow: 1,
  },
  iconButton: {
    color: "#ffffff",
  },
  Active: {
    background: "#f4f4f4",
  },
  link: {
    textDecoration: "none",
  },
}));

const PersistentDrawerLeft = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const history = useHistory();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // menuItems..
  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon color="primary" />,
      path: "/",
    },
    {
      text: "Products",
      icon: <AssignmentIcon color="primary" />,
      path: "/Products",
    },
    // {
    //   text: "SignIn",
    //   icon: <LockSharpIcon color="primary" />,
    //   path: "/SignIn",
    // },
    // {
    //   text: "SignUp",
    //   icon: <LockSharpIcon color="primary" />,
    //   path: "/SignUp",
    // },
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            Shopping Cart
          </Typography>
          <Link to="/SignIn" className={classes.link}>
           <IconButton aria-label="user" className={classes.iconButton}>
            <PersonIcon />
           </IconButton>
          </Link>
          <Link to="/Cart" className={classes.link}>
            <IconButton aria-label="cart" className={classes.iconButton}>
              <Badge badgeContent={props.Shop.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        role="presentation"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} color="primary">
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((items) => (
            <ListItem
              button
              key={items}
              onClick={() => history.push(items.path)}
              className={
                location.pathname == items.path ? classes.Active : null
              }
            >
              <ListItemIcon onClick={handleDrawerClose}>
                {items.icon}
              </ListItemIcon>
              <ListItemText onClick={handleDrawerClose} primary={items.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Shop: state.products,
  };
};

export default connect(mapStateToProps)(PersistentDrawerLeft);
