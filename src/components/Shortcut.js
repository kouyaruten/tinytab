import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getTitleAtUrl from 'get-title-at-url';
import EditButton from './EditButton';

export default function Shortcut(props) {
  const { id, title, url, editShortcut, deleteShortcut } = props;
  const [imgUrl, setImgUrl] = useState('');
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <a href={`https://${url}`} style={{ zIndex: 1 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div
          style={{
            margin: 0,
            backgroundColor: '#2c2c2e',
            paddingTop: '2.5rem',
            paddingBottom: '.5rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            borderRadius: '8px',
            transition: 'all 0.2s',
            height: 100,
            width: 80,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={`https://www.google.com/s2/favicons?sz=256&domain=${url}`} style={{ width: 40 }} />
            <p style={{ textTransform: 'capitalize', fontSize: 16 }}>{title}</p>
          </div>
        </div>
      </a>
      <EditButton
        hover={hover}
        url={url}
        title={title}
        id={id}
        editShortcut={editShortcut}
        deleteShortcut={deleteShortcut}
      />
    </>
  );
}
