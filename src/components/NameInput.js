import React, { useState, useEffect } from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';

export default function NameInput() {
  const [name, setName] = useState(JSON.parse(window.localStorage.getItem('username')) || '');
  const [currName, setCurrName] = useState(name);
  const [editing, setEditing] = useState(name === '');
  const [hover, setHover] = useState(false);

  const [date, setDate] = useState(new Date());

  const hour = date.getHours();
  const min = String(date.getMinutes()).padStart(2, '0');

  useEffect(() => {
    const tick = () => setDate(new Date());

    const timerId = setTimeout(tick, 1000);

    // 返回一个清除函数， 清除函数会在组件卸载前执行，执行当前effect前对上一个effect进行清除

    return () => clearTimeout(timerId);
  }, [date]);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleInputChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(currName);
    window.localStorage.setItem('username', JSON.stringify(currName));
    setEditing(false);
  };

  const handleOpenForm = () => {
    setEditing(true);
  };

  const getGreeting = (hour) => {



    if (6 <= hour < 12)
      return "上午好";

    else if (12 <= hour < 14)
      return "中午好";

    else if (14 <= hour < 18)
      return "下午好";

    else
      return "晚上好";



  }

  return (
    <div style={{ width: '40%', zIndex: 1, marginBottom: 100 }}>
      {editing ? (
        <>
          <h1
            style={{
              color: '#efeeee',
              textAlign: 'center',
              fontWeight: 100,
              fontSize: '3rem',
              marginBottom: 40,
              userSelect: 'none',
            }}
          >
            What's your name?
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              size="50"
              maxLength="255"
              autoComplete="off"
              placeholder="Enter your name..."
              value={currName}
              onChange={handleInputChange}
              onFocus={(e) => {
                e.target.select();
              }}
              autoFocus
            />
          </form>
        </>
      ) : (
        <h1
          style={{
            color: '#efeeee',
            textAlign: 'center',
            fontWeight: 100,
            fontSize: '3rem',
            marginBottom: 40,
            verticalAlign: 'middle',
            userSelect: 'none',
            marginLeft: '3rem',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {getGreeting(hour)}, {name}.
          <IconButton aria-label="edit" onClick={handleOpenForm} style={{ marginLeft: '1rem' }}>
            <EditOutlinedIcon
              style={{ color: '#efeeee', opacity: hover ? 0.8 : 0, transition: 'opacity 0.2s ease-in-out' }}
            />
          </IconButton>
        </h1>
      )}
    </div>
  );
}
