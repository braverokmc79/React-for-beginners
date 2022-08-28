import { useParams, useNavigate } from 'react-router-dom';
import Word, { IWord } from './Word';
import useFetch from '../hooks/useFetch';

const Day = () => {
    const { day } = useParams<{day:string}>();

    const days = useFetch(`http://localhost:3001/days`);
    const words :IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
    const navigate = useNavigate();

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>등록된 단어가 없습니다.</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word key={word.id} word={word} />
                    ))}
                </tbody>
            </table>
            <div style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-evenly"
            }}>

                <button
                    onClick={() => {
                        if (Number(day) > 1) {
                            navigate(`/day/${Number(day) - 1}`)
                        }
                    }}
                    style={{
                        opacity: Number(day) === 1 ? 0.3 : 1
                    }}
                >이전</button>
                <button onClick={() => {
                    navigate(`/day/${Number(day) + 1}`)
                }}
                    style={{
                        opacity: Number(day) === (days.length) ? 0.3 : 1
                    }}

                >다음</button>
            </div>
        </>
    );
};

export default Day;