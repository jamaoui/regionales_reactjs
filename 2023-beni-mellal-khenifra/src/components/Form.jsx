import homme from '../homme.png'
import femme from '../femme.png'
import {useState} from "react";

export default function Form() {
    const [gender, setGender] = useState()
    const [taille, setTaille] = useState()
    const [result, setResult] = useState('')
    const [error, setError] = useState()
    const onSelectChange = ((event) => {
        event.preventDefault()
        setGender(event.currentTarget.value)
    });
    const onNumberChange = (event) => {
        const value = parseInt(event.currentTarget.value)
        if (isNaN(value)) {
            throw Error('La taille doit être un entier')
        }
        if (value < 150) {
            setError('La taille minimum est: 150cm')
        } else {
            setTaille(value)
            setError(undefined)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let imc = (gender === 'homme') ? taille - 100 - ((taille - 150) / 4) : taille - 100 - ((taille - 150) / 2.5)
        setResult(imc + ' Kg')
    };
    return (
        <>
            <form>
                <label>Taille en CM</label><br/>
                <input onChange={onNumberChange} type="text" id={'taille'}/><br/>
                <label>Genre</label><br/>
                <div style={{display: 'flex'}}>
                    <select onChange={onSelectChange} id={'genre'}>
                        <option value="">Choisissez</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    {
                        gender === 'homme' ?
                            <img width={25} src={homme} alt={'homme'}/> :
                            <img width={25} src={femme} alt={'femme'}/>
                    }
                </div>
                <div style={{
                    border: '1px solid gray',
                    minHeight: '2rem',
                    margin: '10px 0',
                    lineHeight: '2rem',
                    padding: '5px 10px'
                }}>
                    {
                        error !== undefined &&
                        <div style={{color: 'red'}}>{error}</div>
                    }
                    {result}

                </div>

                <input onClick={handleSubmit} value={'Calculer'} type="submit"
                       style={{border: '1px solid aqua', backgroundColor: 'transparent', color: 'aqua'}}/><br/>
            </form>
        </>
    );
}
