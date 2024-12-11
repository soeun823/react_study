import { useState } from "react";
import './App.css'
function 네임컴포넌트(){
    const [이름, 이름변경] = useState("소마고");
    const [보이기,보이기변경] = useState(true)
    return(
        <div className='toggle-container'>
            <h1 className='toggle-header'>{보이기?`현재이름: ${이름}` : "이름이 없습니다"}</h1>
            <button className='toggle-button ' onClick={() => {보이기변경(!보이기)}}>이름숨기기</button>
        </div>
    );
}
export default 네임컴포넌트;