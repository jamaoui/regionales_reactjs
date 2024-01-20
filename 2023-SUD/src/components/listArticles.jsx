import {useSelector} from "react-redux";
import {AddArticle} from "./AddArticle";

export function ListArticles() {
    const articles = useSelector(state => state)
    return (
        <>
            <AddArticle/>
            {articles.map(article => <div key={article.id}>
                <hr/>
                <p>ID: {article.id}</p>
                <p>DESIGNATION: {article.designation}</p>
                <p>FAMILLE: {article.famille}</p>
            </div>)}
        </>
    )
}