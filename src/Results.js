import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const barPositioningHeight = 734;
const tallestElement = 451;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
    display: 'flex',
    flexWrap: 'wrap',
    height: '1080px',
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(2),
      // width: theme.spacing(16),
      height: theme.spacing(16),
    }
  },
  garden: {
    borderRadius: '30px 30px 0px 0px',
    background: 'linear-gradient(180deg, #FB8437 0%, #7E421C 100%) 0% 0% no-repeat padding-box',
    width: '400px',
    position: 'fixed',
  },
  linear: {
    borderRadius: '30px 30px 0px 0px',
    background: 'transparent linear-gradient(180deg, #42B8B4 0%, #1D7471 100%) 0% 0% no-repeat padding-box',
    width: '400px',
    position: 'fixed',
  },
  gallery: {
    borderRadius: '30px 30px 0px 0px',
    background: 'transparent linear-gradient(180deg, #4491C9 0%, #154669 100%) 0% 0% no-repeat padding-box',
    width: '400px',
    position: 'fixed',
  },
  walk: {
    borderRadius: '30px 30px 0px 0px',
    background: 'transparent linear-gradient(180deg, #EBAF31 0%, #77591A 100%) 0% 0% no-repeat padding-box',
    width: '400px',
    position: 'fixed',
  },
  paper: {
    bottom: 0,
    height: theme.spacing(28),
    width: theme.spacing(50),
    display: 'flex',
    position: 'fixed',
    textAlign: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 24,
    width: '368px',
    letterSpacing: '0.68px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 'bold'
  },
  votes: {
    fontSize: '90px',
    fontWeight: 'bold',
    fontFamily: "'Monsterrat', sans-serif",
  },
  media: {
    height: 65,
    width: 70,
    marginLeft: '150px'
  },
  header: {
    color: 'white',
    fontFamily: "'Monsterrat', sans-serif",
    fontSize: '80px',
    fontWeight: 'bold',
    letterSpacing: '1.6px',
    textAlign: 'center',
    width: '100%'
  }
}));
  

export function Results() {

  const [gardenVotes, setGardenVotes] = useState(0);
  const [linearVotes, setLinearVotes] = useState(0);
  const [galleryVotes, setGalleryVotes] = useState(0);
  const [walkVotes, setWalkVotes] = useState(0);
  const [gardenHeight, setGardenHeight] = useState(0);
  const [gardenTop, setGardenTop] = useState(0);
  const [linearHeight, setLinearHeight] = useState(0);
  const [linearTop, setLinearTop] = useState(0);
  const [galleryHeight, setGalleryHeight] = useState(0);
  const [galleryTop, setGalleryTop] = useState(0);
  const [walkHeight, setWalkHeight] = useState(0);
  const [walkTop, setWalkTop] = useState(0);

  function calculateCss() {
  
    var maxValue = Math.max(gardenVotes, linearVotes, galleryVotes, walkVotes);
    var scaleValue;
    if (maxValue === 0) {
      scaleValue = 0;
    } else {
        scaleValue = tallestElement / maxValue;
    }
  
    setGardenHeight(Math.floor(gardenVotes * scaleValue));
    setGardenTop(Math.floor(barPositioningHeight - gardenHeight));
    setLinearHeight(Math.floor(linearVotes * scaleValue));
    setLinearTop(Math.floor(barPositioningHeight - linearHeight));
    setGalleryHeight(Math.floor(galleryVotes * scaleValue));
    setGalleryTop(Math.floor(barPositioningHeight - galleryHeight));
    setWalkHeight(Math.floor(walkVotes * scaleValue));
    setWalkTop(Math.floor(barPositioningHeight - walkHeight));
  }
  
  function parseVotes(jsonVotes) {
    var data = jsonVotes.data;
    setGardenVotes(data[0].results);
    setLinearVotes(data[1].results);
    setGalleryVotes(data[2].results);
    setWalkVotes(data[3].results);
  }

  const classes = useStyles();
  
  fetch('/results')
  .then(response => response.json())
  .then(response => {
    parseVotes(response);
    calculateCss();
  }).catch((error) => {
    console.error(error);
  });

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Our most anticipated projects</h2>
      <Grid container spacing={3}>
        <Grid item xs={3}>
      <Paper className={classes.garden} style={{top: gardenTop, height: gardenHeight}}/>
      </Grid>
      <Grid item xs={3}>
      <Paper className={classes.linear} style={{top: linearTop, height: linearHeight}}/>
      </Grid>
      <Grid item xs={3}>
      <Paper className={classes.gallery} style={{top: galleryTop, height: galleryHeight}}/>
      </Grid>
      <Grid item xs={3}>
      <Paper className={classes.walk} style={{top: walkTop, height: walkHeight}}/>
      </Grid>
      </Grid>
      {/* Row Two */}
      <Grid container spacing={3}>
      <Grid item xs={3}>
        <Card className={classes.paper}>
          <CardContent>
            <Typography className={classes.title} style={{color: '#FB8437'}}>
              Children's Garden
            </Typography>
            <CardMedia className={classes.media}
            image = { require ("./images/heart.svg")}>
            </CardMedia>
            <Typography className={classes.votes} style={{color: '#FB8437'}}>
              { gardenVotes }
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className={classes.paper}>
          <CardContent>
          <Typography className={classes.title} style={{color: '#42B8B4'}}>
            Interurban Linear Garden
          </Typography>
          <CardMedia className={classes.media}
            image = { require ("./images/heart-1.svg")}>
            </CardMedia>
          <Typography className={classes.votes} style={{color: '#42B8B4'}}>
            { linearVotes }
          </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className={classes.paper}>
          <CardContent>
          <Typography className={classes.title} style={{color: '#4491C9'}}>
          Gallery Connections
          </Typography>
          <CardMedia className={classes.media}
            image = { require ("./images/heart-2.svg")}>
            </CardMedia>
          <Typography className={classes.votes} style={{color: '#4491C9'}}>
            { galleryVotes }
          </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className={classes.paper}>
          <CardContent>
          <Typography className={classes.title} style={{color: '#EBAF31'}}>
            Woodland Walk
          </Typography>
          <CardMedia className={classes.media}
            image = { require ("./images/heart-3.svg")}>
            </CardMedia>
          <Typography className={classes.votes}  style={{color: '#EBAF31'}}>
            { walkVotes }
          </Typography>
          </CardContent>
        </Card>
      </Grid>
      </Grid>
    </div>
  );
}

export default Results;
