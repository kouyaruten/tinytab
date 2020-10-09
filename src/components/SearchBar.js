import React, { useEffect, useState } from 'react';

export default function SearchBar() {
  const [date, setDate] = useState(new Date());

  const hour = date.getHours();
  const min = String(date.getMinutes()).padStart(2, '0');

  useEffect(() => {
    const tick = () => setDate(new Date());

    const timerId = setTimeout(tick, 1000);

    // 返回一个清除函数， 清除函数会在组件卸载前执行，执行当前effect前对上一个effect进行清除

    return () => clearTimeout(timerId);
  }, [date]);

  return (
    <div style={{ width: '40%', zIndex: 1 }}>
      <h1
        style={{
          color: '#efeeee',
          textAlign: 'center',
          fontWeight: 300,
          fontSize: '5rem',
          marginBottom: 40,
          userSelect: 'none',
        }}
      >
        {hour}:{min}
      </h1>
      <form action="https://www.google.com/search" method="get">
        <input
          className="input"
          type="text"
          name="q"
          size="50"
          maxLength="255"
          autoComplete="off"
          placeholder="Search"
        />
        {/* <button type="submit" name="btnG">
          Search
        </button> */}
      </form>
    </div>
  );
}
