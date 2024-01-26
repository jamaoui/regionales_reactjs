import {useState} from "react";

export default function Concatenation() {
    const [mot1, setMot1] = useState('')
    const [mot2, setMot2] = useState('')
    const [motComplet, setMotComplet] = useState('')

    function handleChangeMot1(event) {
        setMot1(event.currentTarget.value)
    }

    function handleChangeMot2(event) {
        setMot2(event.currentTarget.value)
    }

    function afficherInfos(event) {
        event.preventDefault()
        setMotComplet('Mot complet est: ' + mot1 + mot2)
    }

    const styleConcatenation = {backgroundColor: 'pink', width: '400px'}
    return (
        <div style={styleConcatenation}>
            <h1>Componsant concaténation</h1>
            <label>Mot 1</label>
            <input onChange={handleChangeMot1} type="text" id={'mot1'}/><span style={{color: 'red'}}>(*)</span><br/>
            <label>Mot 2</label>
            <input onChange={handleChangeMot2} type="text" id={'mot2'}/><span style={{color: 'red'}}>(*)</span><br/>
            <input onClick={afficherInfos} type="submit" value={'Afficher mot complet'}/>
            <div>{motComplet}</div>
        </div>

    );
}
