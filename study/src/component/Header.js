import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <h1>
                <Link to="/">영단어 2학기 2회</Link>
                <div className="menu">
                    <Link to="/create_word" className="link">단어 추가</Link>
                    <a href="#x" className="link">Day 추가</a>
                </div>
            </h1>
        </div>
    );
}