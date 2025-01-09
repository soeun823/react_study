import "./styles.css";
import { useState } from "react";
// useState 변수는 컴포넌트 밖에서 사용 불가능
const Modal = (props)=>{
	return(
		<div id="modal">입력한 값은 
			<span style={{color : "orangered"}}>
			{props.text}</span>입니다.
	</div>
	);
}

export default function InputText(){
	let 글자 = "초기값";
	let [text,setText] = useState('');
	return(
		<div>
			<p>
				<input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
				<button onClick={(e)=>setText("")}>초기화</button>
			</p>
			<hr />
			{ text  && <Modal text = {text} />}
		</div>
	);
}