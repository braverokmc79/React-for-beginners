import dummy from "../db/data.json";
import { useState } from 'react';


const DayList = () => {
    console.log(dummy.days, dummy.words);
    const [days, setDays] = useState(dummy.days)
    const [words, setWords] = useState(dummy.words)

    return (
        <ul className="list_day">
            {dummy.days.map(day => (
                <li key={day.id}>
                    Day {day.day}
                </li>
            ))}

        </ul>
    );
};

export default DayList;