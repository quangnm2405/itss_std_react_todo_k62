import React, { useState } from 'react';

function Input( {onAdd} ) {

  const [text,setText] = useState('');
  const handleChange = (e) => {
    const {value} = e.target;
    setText(value);
  };
  const handleAdd = (e) => {
    if(text !== "" && e.keyCode === 13){
      onAdd(text);
      setText('');
    }
  };
  return (
    <div className="panel-block">
      <input
          className="input"
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleAdd}
      />
    </div>
  );
}
export default Input;