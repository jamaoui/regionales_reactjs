import {createStore} from "redux";
import {Provider} from "react-redux";
import {ListArticles} from "./components/listArticles";
import {Bdi} from "./components/Bdi";

const DELETE_ARTICLE_ACTION = 'DELETE_ARTICLE'
const ADD_ARTICLE_ACTION = 'ADD_ARTICLE'
export const ADD_ARTICLE = (article) => {
    return {type: ADD_ARTICLE_ACTION, payload: article}
}

export const DELETE_ARTICLE = (id) => {
    return {type: DELETE_ARTICLE_ACTION, payload: id}
}

const initState = [
    {id: 10, designation: 'article1', famille: 'informatique'},
    {id: 11, designation: 'article2', famille: 'bureau'}
]
//2
export const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ARTICLE_ACTION:
            return [...state, action.payload]
        case DELETE_ARTICLE_ACTION:
            return state.filter((article) => article.id != action.payload)
        default:
            return state
    }
}

//3
const store = createStore(articleReducer)

export default function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ListArticles/>
            </Provider>
        </div>
    );
}
