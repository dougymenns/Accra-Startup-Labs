import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import loginimage from "../images/loginimage.png";
import Logo from "../images/logo1.png";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { toast } from "react-toastify";
import BlockUi from "react-block-ui";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import "react-block-ui/style.css";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: "#9e9e9e", fontFamily: "Montserrat" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        StartUp Accra
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    fontFamily: "Montserrat",
  },
  image: {
    backgroundImage: `url(${loginimage})`,
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NetworkAttendance() {
  const [state, setState] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    suscribe: "",
    about_us: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log(state);
  };
  const classes = useStyles();
  const history = useHistory();
  const submitAttendance = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/attendance`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      const results = await res.json();

      if (results.success === "failed") {
        setLoading(false);
        swal("Snap😐 ", "You Already Clocked In", "error");
        setState({
          first_name: " ",
          last_name: " ",
          email: " ",
          suscribe: " ",
          about_us: " ",
        });
      } else if (results.success) {
        setLoading(false);
        swal("Hurray!🎉 ", "Clocked In Successful!", "success");
        setState({
          first_name: " ",
          last_name: " ",
          email: " ",
          suscribe: " ",
          about_us: " ",
        });
        return setTimeout(() => {
          history.push("/");
        }, 3000);
      }
    } catch (e) {
      return toast.error(e.toString());
    } finally {
      setLoading(false);
    }
  };
  return (
    <BlockUi tag="div" blocking={loading}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Link href="/">
              <img src={Logo} width="250px" />
            </Link>
            <Typography
              component="h1"
              variant="h5"
              style={{
                color: "#9e9e9e",
                fontFamily: "Montserrat",
                fontWeight: "600",
              }}
            >
              Clock In
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoFocus
                value={state.first_name}
                onChange={handleChange}
                label={
                  <Typography
                    style={{ color: "#9e9e9e", fontFamily: "Montserrat" }}
                    variant="body2"
                  >
                    First Name*
                  </Typography>
                }
              />
              <TextField
                variant="outlined"
                margin="normal"
                label={
                  <Typography
                    style={{ color: "#9e9e9e", fontFamily: "Montserrat" }}
                    variant="body2"
                  >
                    Last Name*
                  </Typography>
                }
                fullWidth
                id="last_name"
                name="last_name"
                value={state.last_name}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                label={
                  <Typography
                    style={{ color: "#9e9e9e", fontFamily: "Montserrat" }}
                    variant="body2"
                  >
                    Email*
                  </Typography>
                }
                fullWidth
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                align="start"
                style={{ color: "black", fontFamily: "Montserrat" }}
              >
                How did you hear of us?
              </Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  style={{
                    color: "#9e9e9e",
                    fontFamily: "Montserrat",
                    fontSize: "13px",
                  }}
                >
                  Select One
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  value={state.about_us}
                  id="demo-simple-select-outlined"
                  name="about_us"
                  onChange={handleChange}
                  label="-- Select One --"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Facebook"}>Facebook</MenuItem>
                  <MenuItem value={"Instagram"}>Instagram</MenuItem>
                  <MenuItem value={"Twitter"}>Twitter</MenuItem>
                  <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
                  <MenuItem value={"Friend"}>Friend</MenuItem>
                </Select>
              </FormControl>
              <br />
              {/* <FormControlLabel
                control={
                  <Checkbox name="suscribe" checked="" value="true" color="primary" />
                }
                label={
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="start"
                    style={{ color: "#9e9e9e", fontFamily: "Montserrat" }}
                  >
                    Suscribe To Our Newsletter
                  </Typography>
                }
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "#3ab675",
                  color: "white",
                  fontFamily: "Montserrat",
                }}
                className={classes.submit}
                onClick={submitAttendance}
              >
                Clock In
              </Button>
              {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color: "#9e9e9e", fontFamily: "Montserrat"}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" style={{color: "#9e9e9e", fontFamily: "Montserrat"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </BlockUi>
  );
}
