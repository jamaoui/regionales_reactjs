import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function DetailVoyage() {
    const {id} = useParams()
    const voyage = useSelector(state => state.find((voyage, key) => key.toString() === id))

    return (<>
            <div>
                <h1>Page contenant les détails du voyage</h1>
                <img width={'100%'} src={voyage.image} alt=""/>
                <h2>{voyage.ville}</h2>
                <h3>{voyage.prix}</h3>
            </div>
        </>
    );
}

export default DetailVoyage;