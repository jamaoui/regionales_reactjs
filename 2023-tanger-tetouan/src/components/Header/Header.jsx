import React, {useState} from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {

    return (

        <div >
            <nav className={styles.navbar}>
                <Link to="/">Liste des stagiaires</Link>
                <Link to="/add">Ajouter un stagiaire</Link>
            </nav>
        </div>
    )
};

export default Header;