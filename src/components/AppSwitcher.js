import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import { IconButton, Menu, MenuItem, makeStyles, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
  },
  button: {
    zIndex: 1,
    color: '#aaa',
    float: 'right',
    marginRight: '2%',
    marginTop: '2%',
  },
  menu: {
    opacity: 0.8,
    marginTop: 64,
  },
  menuItem: {
    color: '#efeeee',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    width: '40%',
    marginBottom: 10,
  },
  container: { width: '25vw', padding: '0px 10px 0px 10px' },
}));

export default function AppSwitcher() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" className={classes.button} onClick={handleClick}>
        <AppsIcon style={{ fontSize: 30 }} />
      </IconButton>
      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Grid container spacing={0} className={classes.container}>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://myaccount.google.com')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/009-account.svg" className={classes.img} />
              Account
            </MenuItem>
          </Grid>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://mail.google.com')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/014-gmail.svg" className={classes.img} />
              Mail
            </MenuItem>
          </Grid>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://calendar.google.com')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/015-calendar.svg" className={classes.img} />
              Calendar
            </MenuItem>
          </Grid>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://docs.google.com/document')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/005-docs.svg" className={classes.img} />
              Docs
            </MenuItem>
          </Grid>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://docs.google.com/spreadsheets')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/006-sheets.svg" className={classes.img} />
              Sheets
            </MenuItem>
          </Grid>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://docs.google.com/presentation')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/007-slides.svg" className={classes.img} />
              Slides
            </MenuItem>
          </Grid>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://drive.google.com/')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/016-drive.svg" className={classes.img} />
              Drive
            </MenuItem>
          </Grid>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://google.com/maps')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/001-google maps.svg" className={classes.img} />
              Maps
            </MenuItem>
          </Grid>
          <Grid item xs={4} onClick={() => (window.location.href = 'https://translate.google.com')}>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <img src="./imgs/004-translate.svg" className={classes.img} />
              Translate
            </MenuItem>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
}
