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
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  z-index: 1;
  border-radius: 8px;
  border: ${(props) => props.isDragging && '2px solid #909294'};
  padding: 0px;
  margin: 8px;
  box-sizing: border-box;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    margin: 0,
    color: '#efeeee',
    borderRadius: 8,
    width: 132,
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
    <a href={`https://${url}`}>
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
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
                    toggleHover={handleMouseLeave}
                  />
                }
              />
              <CardContent
                style={{
                  marginTop: -50,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: -10,
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`https://${url}/favicon.ico`}
                  style={{ width: 30, marginTop: 5 }}
                />
                <p style={{ textTransform: 'capitalize', fontSize: 16, textAlign: 'center' }}>
                  {title.length <= 12 ? title : title.substring(0, 10) + '...'}
                </p>
              </CardContent>
            </Card>
          </Container>
        )}
      </Draggable>
    </a>
  );
}
