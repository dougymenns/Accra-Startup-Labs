import React from "react";
import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import back from "../images/home4background.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import GridListTile from "@material-ui/core/GridListTile";
import events1 from "../images/events1.png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  container: {
    width: "80%",
    margin: "auto",
  },
  h3: {
    fontSize: "30px",
  },
  h4: {
    fontSize: "20px",
    marginTop: "30px",
    cursor: "pointer",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backimg: {
    backgroundImage: `url(${back})`,
    // opacity:"0.1"
  },
  map: {
    width: "715px",
    height: "520px",
    border: "0",
  },
  left: {
    marginTop: "100px",
  },
  paperContainer: {
    // height: "444px",
    marginBottom: "50px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    height: "200px",
  },
  [theme.breakpoints.down("xs")]: {
    h3: {
      fontSize: "20px",
    },
    map: {
      width: "100%",
      height: "520px",
      border: "0",
    },
    container: {
      width: "100%",
      widthTop: "10px",
    },
    paperContainer: {
      height: "444px",
      marginBottom: "50px",
    },
    backimg: {
      backgroundImage: `url(${back})`,
    },
  },
}));
const tileData = [
  {
    img: "../images/events1.png",
    title: "Image",
    author: "author",
  },
  {
    img: "../images/events1.png",
    title: "Image",
    author: "author",
  },
];

function MiniEvents() {
  //using theme for mobile rendering
  const theme = useTheme();
  //media query init
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div style={{ backgroundColor: "#e5f8ee" }} className={classes.backimg}>
      <div className={classes.container}>
        <h3
          className={classes.h3}
          style={{
            textAlign: "center",
            marginBlockStart: "0",
            marginBlockEnd: "0",
            color: "#5c5c5c",
          }}
        >
          Events
        </h3>
        <hr style={{ width: "50px", color: "#e5f8ee" }} />
        <Grid container xs={12} spacing={isMobile ? 0 : 2}>
          <Grid item xs={12} lg={3}>
            <div className="card" onClick={handleClickOpen("paper")}>
              <div className="card-header-container">
                <h3 style={{ color: "white" }}>Meeting Your Next Cofounder </h3>
                <p style={{ color: "white" }}>Come . Connect . Build</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <div className="card">
              <div className="card-header-container">
                <h3 style={{ color: "white" }}>
                  Ecosystem Collaboration for Growth
                </h3>
                <p style={{ color: "white" }}>Come . Connect . Build</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <div className="card">
              <div className="card-header-container">
                <h3 style={{ color: "white" }}>
                  Ecosystem Collaboration for Growth
                </h3>
                <p style={{ color: "white" }}>Come . Connect . Build</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <div className="card">
              <div className="card-header-container">
                <h3 style={{ color: "white" }}>
                  Ecosystem Collaboration for Growth
                </h3>
                <p style={{ color: "white" }}>Come . Connect . Build</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Link to="#" style={{ textDecoration: "none" }}>
        <h4
          className={classes.h4}
          style={{
            textAlign: "center",
            color: "#5c5c5c",
            color: "green",
          }}
        >
          View More
          <ArrowForwardIcon style={{ fontSize: "13px", paddingTop: "5px" }} />
        </h4>
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <Typography
            variant="p"
            component="h5"
            style={{ fontFamily: "Montserrat" }}
          >
            Highlights from Meet Your Next Cofounder
          </Typography>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <GridList className={classes.gridList} cols={1.5}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={events1} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
            <p style={{ color: "black" }}>
              Scroll horizontally to view more pictures
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#3AB675" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MiniEvents;
