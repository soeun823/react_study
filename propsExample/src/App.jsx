import { useState } from 'react';
import './App.css'

function App() {
  const [count, 카운트변경] = useState(0);
  return (
    <>
      <h1>Counter</h1>
      <h3>{count}번 눌럿읍니다.</h3>
      <button onClick={() => 카운트변경(count+1)}>증가</button>
      <button onClick={() => 카운트변경(count-1)}>감소</button>
      <button onClick={() => 카운트변경(0)}>초기화</button>
    </>
  );
}
export default App
