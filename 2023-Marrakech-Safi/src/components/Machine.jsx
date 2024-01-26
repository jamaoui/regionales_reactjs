export default function Machine(props) {
    const {id, ref, marque, prix, description} = props.infos
    const setPanier = props.setPanier
    const panier = props.panier

    const styleMachine = {border: '5px solid royalblue', marginBottom: '10px', padding: '10px'}

    function ajouterAuPanier() {
        setPanier([...panier, props.infos])
    }

    function supprimerDuPanier() {
        setPanier(panier.filter(item => item.id !== id))
    }

    return (
        <li style={styleMachine}>
            id: {id},
            ref: {ref} ,
            marque: {marque} ,
            prix: {prix}
            description: {description}
            {!panier.some((item) => item.id === id) ?
                <button onClick={ajouterAuPanier}>Ajouter au panier</button> :
                <button onClick={supprimerDuPanier}>Supprimer du panier</button>
            }
        </li>
    );
}
