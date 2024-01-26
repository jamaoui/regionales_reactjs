import {useState} from "react";
import Machine from "./Machine";

export default function ListeMachine() {
    const listMachine = [
        {id: 1, ref: 'ref1', marque: 'LG', prix: 5000, description: 'Machine à laver LG 8kgs'},
        {id: 2, ref: 'ref2', marque: 'WHIRLPOOL', prix: 9000, description: 'Refrigérateur Whirlpool'},
        {id: 3, ref: 'ref1', marque: 'Nespresso', prix: 1500, description: 'Machine à café Nespresso'}
    ]
    const [panier, setPanier] = useState([])
    const styleListeMachine = {border: '5px solid red', padding: '5px', width: '640px'}
    return (
        <div style={styleListeMachine}>
            <h1>Liste des machines</h1>
            <ul style={{listStyleType: 'none', padding: '5px'}}>
                {listMachine.map((machine => <Machine key={machine.id} infos={machine} setPanier={setPanier}
                                                      panier={panier}/>))}
            </ul>
            {
                panier.length === 0 ? <h1>Votre panier est vide</h1> :
                    <div>
                        <h2>Liste des articles de votre panier sont:</h2>
                        <ul style={{listStyleType: 'none', padding: '5px'}}>
                            {panier.map(item => <li key={item.id}>
                                ref: {item.ref} ,
                                marque: {item.marque} ,
                                prix: {item.prix}
                            </li>)}
                        </ul>
                    </div>
            }

        </div>

    );
}
