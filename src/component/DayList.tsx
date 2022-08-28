import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


export interface IDay {
      id: 3,
      day: 3    
}

const DayList = () => {

    const days :IDay[] = useFetch("http://localhost:3001/days");


    if (days.length === 0) {
        return <div className='d-flex justify-content-center loading-spinner'
            style={{
                marginTop: "50px",
                textAlign: "center"
            }}
        >

            <div className="spinner-border text-danger"
                style={{
                    width: '3rem',
                    height: '3rem'
                }}
                role="status" >
                <span className="sr-only">Loading...</span>
            </div>
        </div >
    }

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id} >
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))
                }

            </ul >
        </>
    );
};

export default DayList;