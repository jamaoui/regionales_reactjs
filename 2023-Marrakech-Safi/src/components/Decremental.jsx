import React, {Component} from 'react';

class Decremental extends Component {
    constructor(props) {
        super(props);
        this.state = {
            debut: this.props.debut,
            fin: this.props.fin,
            pas: this.props.pas,
            compteur: this.props.debut,
            resultat: '',
        }
    }

    initialiser() {
        this.setState({
            debut: this.props.debut,
            fin: this.props.fin,
            pas: this.props.pas,
            compteur: this.props.debut,
            resultat: '',
        })
    }

    jouer() {
        this.setState({compteur: this.state.compteur - this.state.pas})
        if (this.state.compteur < this.state.fin) {
            this.setState({resultat: 'Fin du jeu'})
        } else {
            this.setState({resultat: 'Compteur est: ' + this.state.compteur})
        }

    }

    render() {
        return (
            <div>
                <h1>Composant Compteur Décremental</h1>
                <ul>
                    <li>Pas: {this.state.pas}</li>
                    <li>Début: {this.state.debut}</li>
                    <li>Fin: {this.state.fin}</li>
                </ul>
                <button onClick={this.jouer.bind(this)}>Jouer</button>
                <button onClick={this.initialiser.bind(this)}>Initialiser jeu</button>
                <div>{this.state.resultat}</div>
            </div>
        );
    }
}

export default Decremental;