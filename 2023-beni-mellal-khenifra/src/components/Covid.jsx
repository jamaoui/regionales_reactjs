import {useEffect, useState} from "react";

export default function Covid() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then(response => response.json())
            .then(response => setData(response))
    }, []);

    return (
        <ul>
            {data?.map((row, key) => {
                return <li key={key}>{row.country} - {row.active}</li>
            })}
        </ul>
    );
}
