import { useState } from "react";
import UserName from "./UserName";

const Hello = ({ age }) => {
    //console.log(props);
    const [name, setName] = useState("Mike");
    //const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인 입니다." : "미성연자 입니다.";

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">
                {name} ({age})  : {msg}
            </h2>

            <UserName name={name} />

            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike");
                //setAge(age + 1);
            }}>Change</button>
        </div >
    );

};

export default Hello;