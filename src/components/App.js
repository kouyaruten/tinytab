import React, { useEffect, useState } from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import BackgroundImage from './BackgroundImage';
import NameInput from './NameInput';
import Shortcuts from './Shortcuts';
import AddButton from './AddButton';
import EditButton from './EditButton';
import { DragDropContext } from 'react-beautiful-dnd';

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
    id: uuid(),
    title: 'Gmail',
    url: 'mail.google.com',
  },
  {
    id: uuid(),
    title: 'Calendar',
    url: 'calendar.google.com',
  },
  {
    id: uuid(),
    title: 'Youtube',
    url: 'youtube.com',
  },
  {
    id: uuid(),
    title: 'Amazon',
    url: 'amazon.com/',
  },
  {
    id: uuid(),
    title: 'LinkedIn',
    url: 'linkedin.com',
  },
  {
    id: uuid(),
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

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    const newList = [...list];
    const newItem = newList.splice(source.index, 1)[0];

    newList.splice(destination.index, 0, newItem);
    window.localStorage.setItem('shortcuts', JSON.stringify(newList));
    setList(newList);
  };

  return (
    <Container>
      <BackgroundImage />
      <SearchBar />
      <NameInput />
      <DragDropContext onDragEnd={onDragEnd}>
        <Shortcuts list={list} editShortcut={editShortcut} deleteShortcut={deleteShortcut} />
      </DragDropContext>
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <AddButton addShortcut={addShortcut} />
      </div>
    </Container>
  );
};

export default App;
