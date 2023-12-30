import React from 'react';
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Stagiaire from "./Stagiaire";

const DetailStagiaire = () => {
    const {nom} = useParams()
    const stagiaire = useSelector((state) => state.find((stagiaire) => stagiaire.nom === nom))
    return (

    <div className={'container'}>
        <Link to={'/'}>Back</Link>
        <img src={stagiaire.image}/>
        <p className={'name'}> {stagiaire.nom}</p>
        <p className={'name'}> {stagiaire.prenom}</p>
        <p className={'name'}> {stagiaire.filiere}</p>
    </div>
)};

export default DetailStagiaire;