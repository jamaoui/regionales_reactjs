import React from 'react';
import styles from './listStagiaire.module.css';
import {useSelector} from "react-redux";
import Stagiaire from "./Stagiaire";

const ListStagiaire = () => {
    const stagiaires = useSelector((state) => state)
    return (
        <div className={styles.container}>
            {stagiaires.map((stagiaire, key) => <Stagiaire key={key} image={stagiaire.image} nom={stagiaire.nom} />)}
        </div>
    );
}

export default ListStagiaire;