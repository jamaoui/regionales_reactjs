import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const AddStagiaire = () => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setForm({...form, [e.currentTarget.name]: e.currentTarget.value})
    }
    const addStagiaire = (e) => {
        e.preventDefault()
        dispatch({
            type: 'add_stagiaire',
            payload: form
        })
        navigate('/'+ form.nom)
    }
    return (

        <div className={'container'}>
            <input onChange={handleChange} type="url" name={'image'} placeholder={'Saisir le lien d\'image'}/><br/>
            <input onChange={handleChange} type="text" name={'nom'} placeholder={'Saisir le nom'}/><br/>
            <input onChange={handleChange} type="text" name={'prenom'} placeholder={'Saisir le prenom'}/><br/>
            <input onChange={handleChange} type="text" name={'filiere'} placeholder={'Saisir la filiere'}/><br/>
            <button onClick={addStagiaire}>Ajouter</button>
        </div>
    )
};

export default AddStagiaire;