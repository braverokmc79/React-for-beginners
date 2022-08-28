import dummy from '../db/data.json';
import { useLocation, useParams } from 'react-router-dom';
const Day = () => {
    const location = useLocation();
    const params = useParams();
    console.log("params ", params, "location ", location);

    const { day } = useParams();
    console.log("day :", day);
    const wordList = dummy.words.filter(word => {
        return Number(word.day) === Number(day)
    });

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Day;