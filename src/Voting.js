import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton';
import { Link } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SvgIcon from '@material-ui/core/SvgIcon';

import picture1 from './images/tim-cooper-XfqGuWevmvs-unsplash.png';
import picture2 from './images/erda-estremera-0ZxdAGG4aWU-unsplash@2x.png';
import picture3 from './images/deanna-j-3GZlhROZIQg-unsplash@2x.png';
import picture4 from './images/fiona-smallwood-rA2t29hZj1s-unsplash@2x.png';
import { Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  gridList: {
    width: 1980,
    height: 862,
    flexGrow: 1
  },
  drawerGrid: {
    flexGrow:1,
  },
  titleBar:{
    background: 'black',
    fontSize: '50px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 'bold',
  },
  header: {
    height: '118px',
    backgroundColor: 'black',
    alignItems: 'center'
  },
  headerText: {
    fontSize: '60px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 'bold',
    letterSpacing: '1.2px'
  },
  footer: {
    top: 'auto',
    bottom: 0,
    height: '100px',
    position: 'fixed',
    background: '#EBAF31',
    alignItems: 'center'
  },

  footerText: {
    textAlign: 'center',
    fontSize: '26px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: '3.12px',
    marginBottom: '40px'
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    fontSize: '50px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 'bold',
    color: 'white',
  },
  drawerCard: {
    height: '250px',
    width: '350px',
    borderRadius: '20px'
  },
  cardText: {
    textAlign: 'center',
    fontSize: '34px',
    fontFamily: "'Montserrat', sans-serif",
    color: 'black',
    letterSpacing: '0.68px',
    fontWeight: 'bold'
  },
  toggleButton: {
    border: '0px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    
  },
  cardActions: {
    justifyContent: 'center',
    paddingTop: '40px'
  },
  selected: {
    backgroundColor: 'red',
  }
}))

const GlobalCss = withStyles({
  '@global': {
    '.MuiDrawer-paperAnchorBottom': {
      height: '500px',
      background: '#EBAF31'
    },
    '.MuiGridListTile-tile': {
      opacity: 0.7,
      display: 'flex',
      justifyContent: 'center'
    },
    '.MuiToggleButton-root.Mui-selected': {
      color: 'red',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      }
    }
    },
})(() => null);

const tileData = [
  {
    img: picture1,
    title: 'Children\'s Garden',
    author: 'Tim Cooper',
    cols: 1,
  },
  {
    img: picture2,
    title: 'Interurban Linear Garden',
    author: 'Erda Estremera',
    cols: 1,
  },
  {
    img: picture3,
    title: 'Gallery Connections',
    author: 'Fiona Smallwood',
    cols: 1,
  },
  {
    img: picture4,
    title: 'Woodland Walk',
    author: 'Fiona Smallwood',
    cols: 1,
  },
]

function HeartIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M538.29,404.35c-.865-9.641-7.7-16.635-16.24-16.635a16.157,16.157,0,0,0-13.829,7.968,15.553,15.553,0,0,0-13.5-7.968c-8.543,0-15.367,6.994-16.241,16.635a17.062,17.062,0,0,0,.508,6.323,27.075,27.075,0,0,0,8.312,13.862L508.21,443.51l21.261-18.969a27.138,27.138,0,0,0,8.312-13.868,17.185,17.185,0,0,0,.506-6.323Z" 
      transform="translate(-478.386 -387.715)"/>
    </SvgIcon>
  );
}

function ChevronIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M14.975,17.065a2.28,2.28,0,0,1-1.493-.6L.647,3.93a2.342,2.342,0,0,1,0-3.284,2.342,2.342,0,0,1,3.284,0L14.975,11.691,26.02.647a2.342,2.342,0,0,1,3.284,0,2.342,2.342,0,0,1,0,3.284L16.468,16.169A1.642,1.642,0,0,1,14.975,17.065Z" />
    </SvgIcon>
  )
}

export function Voting() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setState({ ...state, [side]: open });
  }

  const [selectedGarden, setSelectedGarden] = React.useState(false);
  const [selectedLinear, setSelectedLinear] = React.useState(false);
  const [selectedGallery, setSelectedGallery] = React.useState(false);
  const [selectedWalk, setSelectedWalk] = React.useState(false);

  function vote() {

    let state = {
      "votes": [
        {
          id: "garden",
          selection: selectedGarden
        },
        {
          id: "linear",
          selection: selectedLinear
        },
        {
          id: "gallery",
          selection: selectedGallery
        },
        {
          id: "walk",
          selection: selectedWalk
        },
      ]
    };
  
    fetch('/vote', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(state)
    });
  }

  return(
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Typography className={classes.headerText}>
          What project proposal are you most excited about?
        </Typography>
      </AppBar>
      <GridList cellHeight={431} className={classes.gridList} cols={2}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <div className={classes.overlay}>
              {tile.title}
            </div>
          </GridListTile>
        ))}
      </GridList>
    <AppBar position="fixed" className={classes.footer} onClick={toggleDrawer('bottom', true)}>
      <Toolbar>
        <div>
          <ChevronIcon viewBox="0 0 30 18" style={{fill: "black"}} transform="translate(-15 -15)"/>
        </div>
      <Typography className={classes.footerText}>
        VOTE FOR YOUR FAVORITE PROJECT PROPOSAL
      </Typography>
      <div>
          <ChevronIcon viewBox="0 0 30 18" style={{fill: "black"}} transform="translate(15 -15)"/>
        </div>
      </Toolbar>
    </AppBar>

    <Drawer
      anchor="bottom"
      open={state.bottom} 
      onClose={toggleDrawer('bottom', false)}
      className={classes.drawer}>
      <Typography className={classes.footerText}>
        VOTE FOR YOUR FAVORIE PROJECT PROPOSAL
      </Typography>
      <Grid container className={classes.drawerGrid} spacing={3}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
        <Grid item>
      <Card className={classes.drawerCard}>
      <CardActions className={classes.cardActions}>
          <ToggleButton
          disableRipple
          className={classes.toggleButton}
          value="selectedGarden"
          selected={selectedGarden}
          onChange={() => {
            setSelectedGarden(!selectedGarden);
          }}> 
          <HeartIcon viewBox="0 0 65 65"
          style={{ fontSize: "3.5rem"}}/>
          </ToggleButton>
        </CardActions>
        <CardContent>
          <Typography className={classes.cardText}>
            Children's Garden
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item>
      <Card className={classes.drawerCard}>
      <CardActions className={classes.cardActions}>
          <ToggleButton
          disableRipple
          className={classes.toggleButton}
          value="selectedLinear"
          selected={selectedLinear}
          onChange={() => {
            setSelectedLinear(!selectedLinear);
          }}> 
          <HeartIcon viewBox="0 0 65 65"
          style={{ fontSize: "3.5rem"}}/>
          </ToggleButton>
        </CardActions>
        <CardContent>
          <Typography className={classes.cardText}>
            Interurban Linear Garden
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item>
      <Card className={classes.drawerCard}>
      <CardActions className={classes.cardActions}>
          <ToggleButton
          disableRipple
          className={classes.toggleButton}
          value="selectedGallery"
          selected={selectedGallery}
          onChange={() => {
            setSelectedGallery(!selectedGallery);
          }}> 
          <HeartIcon viewBox="0 0 65 65"
          style={{ fontSize: "3.5rem"}}/>
          </ToggleButton>
        </CardActions>
        <CardContent>
          <Typography className={classes.cardText}>
            Gallery Connections
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid>
      <Card className={classes.drawerCard}>
      <CardActions className={classes.cardActions}>
          <ToggleButton
          disableRipple
          className={classes.toggleButton}
          value="selectedWalk"
          selected={selectedWalk}
          onChange={() => {
            setSelectedWalk(!selectedWalk);
          }}> 
          <HeartIcon viewBox="0 0 65 65"
          style={{ fontSize: "3.5rem"}}/>
          </ToggleButton>
        </CardActions>
        <CardContent>
          <Typography className={classes.cardText}>
            Woodland Walk
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      </Grid>
      </Grid>
      </Grid>

      <Grid container style={{marginBottom:"60px"}}>
        <Grid item xs={3}>
        </Grid>
      <Grid item xs={3} align='center'>
      <Link to="/results">
        <Button variant="contained"
        color="secondary"
        onClick={vote} width='%100' align='center'>
          Submit
        </Button>
        </Link>
        </Grid>
        <Grid item xs={3} align='center'>
        <Button onClick={toggleDrawer('bottom', false)}>
          Cancel
      </Button>
      </Grid>
      <Grid item xs={3}>
        </Grid>
      </Grid>

    </Drawer>

      <GlobalCss />
    </div>
  );
}

export default Voting;