import React, { useEffect, useState } from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import BackgroundImage from './BackgroundImage';
import NameInput from './NameInput';
import Shortcuts from './Shortcuts';
import AddButton from './AddButton';
import EditButton from './EditButton';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: #2c2c2e;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const initialList = [
  {
    id: 1,
    title: 'Gmail',
    url: 'mail.google.com',
  },
  {
    id: 2,
    title: 'Calendar',
    url: 'calendar.google.com',
  },
  {
    id: 3,
    title: 'Youtube',
    url: 'youtube.com',
  },
  {
    id: 4,
    title: 'Amazon',
    url: 'amazon.com/',
  },
  {
    id: 5,
    title: 'LinkedIn',
    url: 'linkedin.com',
  },
  {
    id: 6,
    title: 'GitHub',
    url: 'github.com',
  },
];

const App = () => {
  const [addFormOpened, setAddFormOpened] = useState(false);
  const [editFormOpened, setEditFormOpened] = useState(false);
  const [list, setList] = useState(JSON.parse(window.localStorage.getItem('shortcuts')) || initialList);

  const addShortcut = (url, title) => {
    if (list.length >= 9) {
      window.localStorage.setItem(
        'shortcuts',
        JSON.stringify([...list.slice(1), { id: uuid(), title: title, url: url }])
      );
    } else {
      window.localStorage.setItem('shortcuts', JSON.stringify([...list, { id: uuid(), title: title, url: url }]));
    }
    setList(JSON.parse(window.localStorage.getItem('shortcuts')));
  };

  const deleteShortcut = (id) => {
    window.localStorage.setItem('shortcuts', JSON.stringify([...list].filter((item) => item.id !== id)));
    setList(JSON.parse(window.localStorage.getItem('shortcuts')));
  };

  const editShortcut = (id, url, title) => {
    const newList = [];
    [...list].forEach((item) => {
      if (item.id !== id) {
        newList.push(item);
      } else {
        newList.push({ id: id, title: title, url: url });
      }
    });
    window.localStorage.setItem('shortcuts', JSON.stringify(newList));
    setList(newList);
  };

  return (
    <Container>
      <BackgroundImage />
      <SearchBar />
      <NameInput />
      <Shortcuts list={list} editShortcut={editShortcut} deleteShortcut={deleteShortcut} />
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <AddButton addShortcut={addShortcut} />
      </div>
    </Container>
  );
};

export default App;
