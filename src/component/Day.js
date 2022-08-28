import dummy from '../db/data.json';
import { useLocation, useParams } from 'react-router-dom';
import Word from './Word';
const Day = () => {
    // const location = useLocation();
    // const params = useParams();
    // console.log("params ", params, "location ", location);


    const { day } = useParams();
    const wordList = dummy.words.filter(word => {
        return Number(word.day) === Number(day)
    });

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word key={word.id} word={word} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Day;