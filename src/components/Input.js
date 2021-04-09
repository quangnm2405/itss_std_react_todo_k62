import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {event}  ) {
  const [input, setInput] = React.useState('')
  let handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      event(input)
    }
  }

  return (
    <div className="panel-block">
      <input class="input" type="text" placeholder="input"
        onKeyPress={handleKeyPress} value={input} onChange={i => setInput(i.target.value)}
      />
    </div>
  );
}

export default Input;
