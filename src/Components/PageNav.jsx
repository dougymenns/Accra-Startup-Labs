import React from "react";
import {
  Grid,
  Tabs,
  Tab,
  Paper,
  makeStyles,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import homeicon from "../images/home2icon.png";
import emailjs from "emailjs-com";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fontResize: {
    fontSize: "20px",
  },
  input: {
    color: "white",
  },
}));
function PageNav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    first_name: "",
    last_name: "",
    emal:""
  })

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_2xl2g8x",
        e.target,
        "user_PandkpWF7AP7Pcme9JDP9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
          swal("Success!🎉 ", "Suscribed successfully!", "success");
          setData({
            first_name: "",
            last_name: "",
            emal:""
          })

          // handleClick();
        },
        (error) => {
          console.log(error.text);
          alert(error.toSrting());
        }
      );
  }
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <form onSubmit={sendEmail}>
          <div className="page-nav">
            <Grid container>
              <img src={homeicon} className="page-nav-background2" />
              <Grid item xs={0} sm={1} md={1} lg={1}>
                <img src={homeicon} className="page-nav-background" />
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="page-nav-content">
                  <center>
                    <p>
                      Ready to make your journey with us? Suscribe to our
                      newsletter today.
                    </p>
                  </center>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Grid container spacing={1} justify="center">
                  <Grid item xs={3}>
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      type="text"
                      name="first_name"
                      InputProps={{
                        className: classes.input,
                      }}
                      label={
                        <Typography
                          style={{ color: "white", fontFamily: "Montserrat" }}
                          variant="body2"
                        >
                          First Name
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="standard-basic"
                      label="Last Name"
                      type="text"
                      name="last_name"
                      InputProps={{
                        className: classes.input,
                      }}
                      label={
                        <Typography
                          style={{ color: "white", fontFamily: "Montserrat" }}
                          variant="body2"
                        >
                          Last Name
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="standard-basic"
                      label="Email"
                      type="email"
                      name="email"
                      InputProps={{
                        className: classes.input,
                      }}
                      label={
                        <Typography
                          style={{ color: "white", fontFamily: "Montserrat" }}
                          variant="body2"
                        >
                          Email
                        </Typography>
                      }
                      InputProps={{
                        className: classes.multilineColor,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                style={{ marginTop: "10px" }}
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid
                  direction="column"
                  alignItems="center"
                  justify="center"
                  item
                  xs={12}
                  sm={0}
                  md={0}
                  lg={0}
                >
                  <button
                    className="nav-cta"
                    type="submit"
                    style={{ backgroundColor: "#2B985F" }}
                  >
                    Suscribe
                  </button>
                </Grid>
              </Grid>
            </Grid>
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
        </form>
      ) : (
        <form onSubmit={sendEmail}>
          <div className="page-nav">
            <Grid container>
              <img src={homeicon} className="page-nav-background2" />
              <Grid item xs={0} sm={1} md={1} lg={1}>
                <img src={homeicon} className="page-nav-background" />
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="page-nav-content">
                  <center>
                    <p style={{ color: "white" }}>
                      Ready to make your journey with us? Suscribe to our
                      newsletter today.
                    </p>
                  </center>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Grid
                  container
                  style={{ marginTop: "35px" }}
                  spacing={1}
                  justify="center"
                >
                  <Grid item xs={3}>
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      value={data.first_name}
                      type="text"
                      name="first_name"
                      InputProps={{
                        className: classes.input,
                      }}
                      label={
                        <Typography
                          style={{ color: "white", fontFamily: "Montserrat" }}
                          variant="headline"
                          component="h3"
                        >
                          First Name
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="standard-basics"
                      label="Last Name"
                      value={data.last_name}
                      type="text"
                      name="last_name"
                      InputProps={{
                        className: classes.input,
                      }}
                      label={
                        <Typography
                          style={{ color: "white", fontFamily: "Montserrat" }}
                          variant="headline"
                          component="h3"
                        >
                          Last Name
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="standard-basic"
                      label="Email"
                      value={data.email}
                      type="email"
                      name="email"
                      InputProps={{
                        className: classes.input,
                      }}
                      label={
                        <Typography
                          style={{ color: "white", fontFamily: "Montserrat" }}
                          variant="headline"
                          component="h3"
                        >
                          Email
                        </Typography>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid style={{ marginTop: "50px" }} item lg={1}>
                <button
                  className="nav-cta"
                  type="submit"
                  style={{ backgroundColor: "#2B985F", width: "170px" }}
                >
                  Suscribe
                </button>
              </Grid>
            </Grid>
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
        </form>
      )}
    </>
  );
}

export default PageNav;
