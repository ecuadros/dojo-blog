import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //console.log('use effect ran');
        //console.log(data);
        setTimeout( () => {
            fetch('')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for this resource');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                setPending(false);
                setError(err.message);
            })
        }, 1000)
    }, [url]);
    return {data, isPending, error}
}

export default useFetch;
