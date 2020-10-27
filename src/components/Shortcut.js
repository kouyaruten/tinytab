import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getTitleAtUrl from 'get-title-at-url';
import EditButton from './EditButton';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Container = styled.div`
  z-index: 999;
  margin: 10px;
  opacity: 0.7;
  background-color: #2c2c2e;
  padding: 0;
  cursor: pointer;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    margin: 8,
    color: '#efeeee',
    borderRadius: 8,
    width: 120,
    padding: 0,
    transition: 'opacity 0.2s ease-in-out',
    opacity: 0.7,
    '&:hover': {
      opacity: 0.9,
    },
  },
}));

export default function Shortcut(props) {
  const classes = useStyles();
  const { id, index, title, url, editShortcut, deleteShortcut } = props;
  const [imgUrl, setImgUrl] = useState('');
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    // <Container onClick={() => (window.location.href = `https://${url}`)}>
    //   <img src={`https://www.google.com/s2/favicons?sz=256&domain=${url}`} style={{ width: 30, marginTop: 5 }} />
    //   <p style={{ textTransform: 'capitalize', fontSize: 16 }}>
    //     {title.length <= 12 ? title : title.substring(0, 10) + '...'}
    //   </p>
    //   <EditButton
    //     hover={hover}
    //     url={url}
    //     title={title}
    //     id={id}
    //     editShortcut={editShortcut}
    //     deleteShortcut={deleteShortcut}
    //   />
    // </Container>
    <Card className={classes.root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CardHeader
        action={
          <EditButton
            hover={hover}
            url={url}
            title={title}
            id={id}
            editShortcut={editShortcut}
            deleteShortcut={deleteShortcut}
          />
        }
      />
      <CardContent
        onClick={() => (window.location.href = `https://${url}`)}
        style={{
          marginTop: -50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: -20,
          cursor: 'pointer',
        }}
      >
        <img src={`https://www.google.com/s2/favicons?sz=256&domain=${url}`} style={{ width: 30, marginTop: 5 }} />
        <p style={{ textTransform: 'capitalize', fontSize: 16, textAlign: 'center' }}>
          {title.length <= 12 ? title : title.substring(0, 10) + '...'}
        </p>
      </CardContent>
    </Card>
  );
}
