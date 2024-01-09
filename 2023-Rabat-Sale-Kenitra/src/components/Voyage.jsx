import React from 'react';
import {Link} from "react-router-dom";

function Voyage({voyage}) {
    return (
        <div>
            <img height={500} src={voyage.image} alt=""/>
            <h2>{voyage.ville}</h2>
            <h3>{voyage.prix}</h3>
            <Link to={'/voyage/'+voyage.key}>
                <button>Plus de détails</button>
            </Link>
        </div>
    );
}

export default Voyage;