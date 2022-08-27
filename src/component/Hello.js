


const Hello = () => {

    function showName() {
        console.log("Mike");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(txt) {
        console.log(txt);
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button onClick={() => {
                showAge(30);
            }} >Show age</button>
            <br /> <br />
            <input type="text" onChange={(e) => {
                const txt = e.target.value;
                showText(txt);
            }} />
        </div >
    );

};

export default Hello;