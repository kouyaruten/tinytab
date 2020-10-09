import React, { useState, useEffect } from 'react';
import Shortcut from './Shortcut';

export default function Shortcuts(props) {
  const { list, editShortcut, deleteShortcut } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: -60 }}>
      {list.map((item, index) => (
        <Shortcut
          key={item.id}
          title={item.title}
          url={item.url}
          id={item.id}
          editShortcut={editShortcut}
          deleteShortcut={deleteShortcut}
        />
      ))}
    </div>
  );
}
