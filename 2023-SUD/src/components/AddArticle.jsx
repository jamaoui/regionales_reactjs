import {useState} from "react";
import {ADD_ARTICLE} from "../App";
import {useDispatch, useSelector} from "react-redux";

export function AddArticle() {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const lastArticle = useSelector(state => state.at(-1))

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(ADD_ARTICLE({...form, id: lastArticle.id + 1}))
    }

    function handleChange(e) {
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value})
    }

    return (
        <>
            <form>
                <input onChange={handleChange} type="text" id='designation' placeholder='designation'/>
                <input onChange={handleChange} type="text" id='famille' placeholder='famille'/>
                <button onClick={handleSubmit}>Ajouter</button>
            </form>
        </>
    )
}