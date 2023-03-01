import React, { forwardRef, useEffect, useState } from 'react';

const Item = forwardRef(({ index, content, ...props }, ref) => {
  const [ check, setCheck ] = useState(true);
  
  useEffect(() => {
    ref.current[index] = check;
  }, [check])
  
  return (
    <div index={index} {...props}>
      <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
      {content}
    </div>
  )
})

export default Item;