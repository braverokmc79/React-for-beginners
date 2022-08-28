
import { useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IDay } from './DayList';

const CreateWord = () => {
    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);
    const [isLoading, setIsLoading] = useState(false);


    const days :IDay[] = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    //useHistory =>eact-router-dom@6 이상 사용안함 = > useNavigate 으로 변경할것
    //const history = useHistory();

    function onSubmit(e : React.FormEvent) {
        e.preventDefault();

        if (!isLoading && dayRef.current && engRef.current && korRef.current) {

            const eng = engRef.current;
            const kor = korRef.current;
            const day = dayRef.current.value;


            if (!eng.value) {
                alert("eng 를 입력해 주세요.");
                eng.focus();
                return;
            }

            if (!kor.value) {
                alert("kor 를 입력해 주세요.");
                kor.focus();
                return;
            }

            setIsLoading(true);
            fetch(`http://localhost:3001/words`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day: day,
                    eng: eng.value,
                    kor: kor.value,
                    isDone: false
                }),
            })
                .then(res => {
                    if (res.ok) {
                        alert("생성이 완료 되었습니다.");                  
                        //dayRef.current.value = 1;
                        // navigate(`/day/${dayRef.current.value}`);
                        setIsLoading(false);
                    }
                });
        }


    }



    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" name="eng" placeholder="cumputer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" name="kor" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select name="day" ref={dayRef} >
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button
                style={
                    {
                        opacity: isLoading ? 0.3 : 1
                    }
                }
            > {isLoading ? "Saving" : "저장"}</button>
        </form>
    );
};

export default CreateWord;