import {useEffect, useState} from "react";

export function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://freejson.com/api/articles')
            .then(response => response.json())
            .then(response => setArticles(response))
    }, []);
    return (
        <></>
    )
}