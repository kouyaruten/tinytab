import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  input: {
    color: 'white',
  },
});
const styles = {
  root: {},
  input: {
    color: '#efeeee',
  },
};
function EditButton(props) {
  const { classes, id, url, title, editShortcut, deleteShortcut, hover } = props;
  const [open, setOpen] = React.useState(false);
  const [myUrl, setMyUrl] = useState(url);
  const [myTitle, setMyTitle] = useState(title);

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleUrlChange = (e) => {
    setMyUrl(e.target.value);
  };

  const handleTitleChange = (e) => {
    setMyTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (myUrl.trim() === '') {
      handleClose();
      return;
    }
    if (myTitle === '' || myTitle.trim() === '') {
      editShortcut(
        id,
        myUrl.trim().replace('https://', '').replace('http://', ''),
        url.trim().replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0]
      );
    } else {
      editShortcut(id, myUrl.trim().replace('https://', '').replace('http://', ''), myTitle.trim());
    }

    handleClose();
  };

  const handleDelete = () => {
    deleteShortcut(id);
    handleClose();
  };

  return (
    <div style={{ opacity: 1 }}>
      <IconButton
        aria-label="more"
        onClick={handleClickOpen}
        style={{ color: 'white', opacity: '0.1', zIndex: 1000, marginLeft: -48 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title" style={{ color: '#efeeee' }}>
          Edit a shortcut
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="URL"
            fullWidth
            autoComplete="off"
            value={myUrl}
            onChange={handleUrlChange}
            onKeyUp={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
            className={classes.root}
            InputProps={{
              className: classes.input,
              disableUnderline: true,
            }}
            InputLabelProps={{
              className: classes.input,
            }}
          />
          <TextField
            id="name"
            label="Description"
            fullWidth
            autoComplete="off"
            value={myTitle}
            onChange={handleTitleChange}
            onKeyUp={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
            className={classes.root}
            InputProps={{
              disableUnderline: true,
              className: classes.input,
            }}
            InputLabelProps={{
              className: classes.input,
            }}
            style={{ marginTop: '1rem' }}
          />
        </DialogContent>
        <DialogActions>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0.5rem' }}>
            <Button onClick={handleDelete} color="primary" style={{ color: '#f5574b', opacity: '0.7', marginLeft: 0 }}>
              Remove
            </Button>
            <div>
              <Button
                onClick={handleClose}
                color="primary"
                style={{ color: '#efeeee', opacity: '0.7', marginRight: '0.5rem' }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                color="primary"
                variant="contained"
                style={{ color: '#2c2c2e', opacity: '0.7', backgroundColor: '#efeeee' }}
              >
                Done
              </Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

EditButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditButton);
