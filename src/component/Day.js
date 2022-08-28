import { useParams } from 'react-router-dom';
import Word from './Word';
import { useState, useEffect } from 'react';

const Day = () => {
    const { day } = useParams();
    // const wordList = dummy.words.filter(word => {
    //     return Number(word.day) === Number(day)
    // });
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
            .then((res) => res.json())
            .then(data => {
                //console.log(data);
                setWords(data);
            }).catch(err => {
                console.error("에러:", err);
            });

    }, [day]);


    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word key={word.id} word={word} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Day;