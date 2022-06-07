import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Error, setError] = useState(false);

  const HandleChangeEmail = (e) => {
    setEmail(e.target.value)
    setError(true)
    console.log(Email,"Email check")
  };

  const HandleChangePassword = (e) => {
    setPassword(e.target.value)
    setError(true)
    console.log(Password,"password check")
  };

  const HandleSubmit = () => {
    // alert(Email+Password)
  }           

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={Email}
            onChange={HandleChangeEmail}
            error={Error}
            helperText={Error ? "Incorrect entry." : ""}
            required
            fullWidth
            // id="email"
            label="Email Address"
            type="email"
            // name="email"
            // autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            value={Password}
            onChange={HandleChangePassword}
            error={Error}
            helperText={Error ? "Incorrect entry." : ""}
            required
            fullWidth
            // name="password"
            label="Password"
            type="password"
            // id="password"
            // autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={HandleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
              Don't have an account? <Link to="/SignUp">Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
