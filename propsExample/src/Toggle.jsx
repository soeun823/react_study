import { useState } from 'react';
import './App.css'

function Toggle() {
//   let isToggle = false;
  const [토글,토글변경함수] =  useState(false);
//   const 일반토글함수 = ()=>{
//     isToggle = !isToggle;
//     console.log(isToggle);
//     }
  return (
    <div className='toggle-container'>
      <h1 className='toggle-header'>
        반전 됐나요?{토글?"ON":"OFF"}
      </h1>
      <button className='toggle-button ' onClick={() => 토글변경함수(!토글)}>
        toggle
      </button>
    </div>
  );
}
export default Toggle;
