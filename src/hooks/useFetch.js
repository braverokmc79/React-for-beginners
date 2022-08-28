import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setData(data);
            }).catch(err => {
                console.error("에러:", err);
            });
    }, [url]);

    return data;
};

export default useFetch;