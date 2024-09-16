import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word.tsx";
import useFetch from "../hook/useFetch.ts";
import React from "react";

export default function Day() {
const { day } = useParams<{day : string}>();

const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

return (
    <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Loading...</span>}
        <table>
        <tbody>
            {words.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
        </table>
    </>
    );
}