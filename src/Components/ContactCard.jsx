import React from "react";
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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo.png";
import emailjs from "emailjs-com";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
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
  font: {
    fontFamily: "Montserrat",
    color: "grey",
  },
  [theme.breakpoints.down("xs")]: {
    img: { height: "60px" },
  },
  font: {
    fontFamily: "Montserrat",
    color: "grey",
  },
}));

export default function ContactCard() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_0pd1979",
        e.target,
        "user_PandkpWF7AP7Pcme9JDP9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
          handleClick();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Grid component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} className={classes.img} />
        <Typography component="h1" variant="h5" className={classes.font}>
          Contact Us
        </Typography>
        <form className={classes.form} noValidate onSubmit={sendEmail}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label={<Typography className={classes.font}>Name</Typography>}
            name="name"
            autoComplete="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            label={<Typography className={classes.font}>Email</Typography>}
            type="email"
            id="email"
          />
          <TextField
            id="filled-multiline-static"
            label={<Typography className={classes.font}>Message</Typography>}
            multiline
            rows={4}
            fullWidth="true"
            defaultValue=" "
            variant="outlined"
            name="message"
          />
          <Grid item xs={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{
                fontFamily: "Montserrat",
                color: "white",
                fontWeight: "600",
                backgroundColor: "#3ab675",
              }}
            >
              Send
            </Button>
          </Grid>
        </form>
      </div>
      <Snackbar
        variant="success"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Message was sent successfully"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      >
        <Alert severity="success">Message was sent successfully</Alert>
      </Snackbar>
    </Grid>
  );
}
