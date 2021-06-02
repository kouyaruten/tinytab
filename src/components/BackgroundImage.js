import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BackgroundImage() {
  return (
    <div>
      <img
        src={`./imgs/${Math.floor(Math.random() * 12)}.jpeg`}
        alt="background image"
        style={{
          display: 'block',
          height: '100%',
          width: '100%',
          position: 'fixed',
          left: 0,
          top: 0,
          objectFit: 'cover',
          backfaceVisibility: 'hidden',
          zIndex: 0,
          filter: 'brightness(0.6) blur(4px)',
        }}
        onDragStart={(e) => {
          if (e && e.preventDefault) {
            e.preventDefault();
          } else {
            window.event.returnValue = false;
          }
        }}
      />
    </div>
  );
}
