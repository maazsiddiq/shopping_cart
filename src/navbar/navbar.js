import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Badge from '@material-ui/core/Badge';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import DialpadOutlinedIcon from '@material-ui/icons/DialpadOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
  position:"sticky",
  top:"0",
  zIndex:"100"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title: {
    flexGrow: 1,
  },
  iconButton: {
    color: "#ffffff",
  },
  link: {
    textDecoration: "none", 
  },
  listitemtext: {
    color: "#ff4400",
  },
}));

 const PersistentDrawerLeft = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          <IconButton onClick={handleDrawerClose} className={classes.listitemtext}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[['/','Home'],['/Products','Products']].map((text, index) => (
         <Link to={text[0]} className={classes.link}>
          <ListItem button key={text} className={classes.listitemtext}>
              <ListItemText onClick={handleDrawerClose} primary={text[1]} />
         </ListItem>
         </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[['SignUp','SignUp'],['/Login','Login']].map((text, index) => (
         <Link to={text[0]} className={classes.link}>
          <ListItem button key={text} className={classes.listitemtext}>
              <ListItemText onClick={handleDrawerClose} primary={text[1]} />
         </ListItem>
         </Link>
          ))}
        </List>
      </Drawer>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    Shop: state.products
  };
};

export default connect(mapStateToProps)(PersistentDrawerLeft);