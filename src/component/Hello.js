import { useState } from "react";

const Hello = () => {
    //let name = "Mike";
    const [name, setName] = useState("Mike");

    // function changeName() {
    //     const newName = name === "Mike" ? "Jane" : "Mike";
    //     //document.getElementById("name").innerText = newName;
    //     setName(newName);
    // }

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike");
            }}>Change</button>
        </div >
    );

};

export default Hello;