import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color:"#ffffff",
    marginTop: theme.spacing(10),
    // position:"absolute",
    left:0,
bottom:0,
right:0,
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          ShoppingCart
        </Typography>
        <Typography variant="subtitle1" align="center"  component="p">
        Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}