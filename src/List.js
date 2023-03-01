import React, { useEffect, useRef, useState } from 'react';
import Item from './Item';

const List = ({ data }) => {
  const childrenRef = useRef([]);
  const shiftIsClickRef = useRef(false);
  const rangeRef = useRef([null, null]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    document.addEventListener('keydown', handleWatchShiftIsPressed);
    document.addEventListener('keyup', handleWatchShiftIsReleased);
    return () => {
      document.removeEventListener('keydown', handleWatchShiftIsPressed);
      document.removeEventListener('keyup', handleWatchShiftIsReleased);
    }
  }, []);

  function handleSection(e) {
    const isInput = e.target.tagName === 'INPUT';
    const selectedIndex = isInput ? null : Number(e.target.getAttribute('index'));

    handleSetRange(selectedIndex);
    handleApplySection(rangeRef.current);
  }

  function handleSetRange(index) {
    if (shiftIsClickRef.current) {
      if (rangeRef.current[0] > index) {
        const start = rangeRef.current[0] || null;
        const end = rangeRef.current[1] || null;
        rangeRef.current = [
          Math.min(start, end, index), 
          Math.max(start, end, index)
        ];
      }
      else {
        rangeRef.current[1] = index;
      }
    }
    else {
      rangeRef.current = [index, index];
    }
  }

  function handleApplySection(range) {
    const arr = [];
    for (let i = range[0]; i <= range[1]; i++) {
      const isAllowSection = childrenRef.current[i];
      isAllowSection && arr.push(i)
    }
    setSelected(arr);
  }

  function handleWatchShiftIsPressed(e) {
    if (e.key === 'Shift') {
      shiftIsClickRef.current = true;
    }
  }

  function handleWatchShiftIsReleased() {
    shiftIsClickRef.current = false;
  }
  
  return (
    <div>
      {data.map((item, i) =>
        <Item key={i} index={i} ref={childrenRef} onClick={handleSection} content={item} style={{
          background: selected?.includes(i) ? '#DDD' : 'transparent'
        }} />
      )}
      <p>is selected: { selected.map((item, i) => <span key={i}>{data[item]}, </span>) }</p>
    </div>
  )
}

export default List;