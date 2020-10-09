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
function AddButton(props) {
  const { classes, addShortcut } = props;
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    // console.log(
    //   'https://www.github.com/'.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0]
    // );
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (url.trim() === '') {
      handleClose();
      return;
    }
    if (title.trim() === '') {
      addShortcut(
        url.trim(),
        url.trim().replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0]
      );
    } else {
      addShortcut(url.trim(), title.trim());
    }
    setUrl('');
    setTitle('');
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        style={{ color: '#2c2c2e', opacity: '0.7' }}
      >
        Add Shortcuts
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title" style={{ color: '#efeeee' }}>
          Add a shortcut ( you can have up to 9 shortcuts! )
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="URL"
            fullWidth
            autoComplete="off"
            value={url}
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
            label="Description (optional)"
            fullWidth
            autoComplete="off"
            value={title}
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
          <Button onClick={handleClose} color="primary" style={{ color: '#efeeee', opacity: '0.7' }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            style={{ color: '#2c2c2e', opacity: '0.7', backgroundColor: '#efeeee' }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
