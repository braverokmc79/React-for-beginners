import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DayList = () => {
    const [days, setDays] = useState([]);
    /*
     const [count, setCount] = useState(0);
 
     function onClick() {
         setCount(count + 1);
     }
 
     function onClick2() {
         setDays([...days, {
             id: new Date(),
             day: (Math.floor(Math.random() * 31)) + 1,
         }]);
     }
 
     useEffect(() => {
         console.log("Counter Chnage");
     }, [count])
 
     */
    useEffect(() => {
        fetch("http://localhost:3001/days")
            .then((res) => res.json())
            .then(data => {
                // console.log("data :", data);
                setDays(data);
            }).catch(err => {
                console.error("에러 :", err);
            });
    }, []);

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id} id={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))
                }

            </ul >
            {/* <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>Day Change</button> */}
        </>
    );
};

export default DayList;