import "./styles.css";
import { useState } from "react";

const Modal = (props) => {
  const { name, nickName, email } = props;
  return (
    <div id="modal">
      입력한 값은{" "}
      <span style={{ color: "orangered" }}>
        {name}, {nickName}, {email}
      </span>
      입니다.
    </div>
  );
};

export default function InputText2() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
    email: "",
  });
  const { name, nickName, email } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setInputs({
      name: "",
      nickName: "",
      email: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${name} 입력이 완료되었습니다.`);
  };

  return (
    <div>
      <form>
        이름
        <input
          name="name"
          placeholder="이름을 입력하세요"
          type="text"
          value={name}
          onChange={handleChange}
        />
				<br/>
        닉네임
        <input
          name="nickName"
          placeholder="닉네임을 입력하세요"
          type="text"
          value={nickName}
          onChange={handleChange}
        />
				<br/>
        이메일
        <input
          name="email"
          placeholder="이메일을 입력하세요"
          type="text"
          value={email}
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          등록
        </button>
        <button type="button" onClick={handleReset}>
          초기화
        </button>
      </form>
      <hr />
      {name && <Modal name={name} nickName={nickName} email={email} />}
    </div>
  );
}
