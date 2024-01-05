import Carte from "./Carte";
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = [
    {
        'titre': 'Restful java webservices',
        'auteur': 'David lu',
        'edition': 'Packt',
        'poster': 'https://m.media-amazon.com/images/I/71tCVS8JEIL._AC_UF894,1000_QL80_.jpg',
        'likes': 0,
    },

    {
        'titre': 'Restful API with Node.js',
        'auteur': 'Fernando daglio',
        'edition': 'Apress',
        'poster': 'https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-3715-1',
        'likes': 0,
    },

    {
        'titre': 'Restful Web Services CookBook',
        'auteur': 'Subbu Allamarju',
        'edition': 'OREILLY',
        'poster': 'https://m.media-amazon.com/images/I/81BSr5FJJfL._AC_UF1000,1000_QL80_.jpg',
        'likes': 0,
    }
]
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'like':
            return state.map((livre, key) => {
                if (key === action.id) {
                    return {...livre, likes: livre.likes + 1}
                }
                return livre
            })
        default:
            return state
    }
}
const store = createStore(reducer)
export default function LivreList() {
    const livres = store.getState()
    return (
        <Provider store={store}>
            <div
                style={{
                    display: 'flex',
                    alignContent: 'center',
                    gap: '1rem',
                    justifyContent: 'center',
                    marginTop: '5rem'
                }}>
                {livres.map((livre, key) => <Carte id={key} key={key} poster={livre.poster} title={livre.titre}
                                                   edition={livre.edition}
                                                   auteur={livre.auteur}/>)}
            </div>
        </Provider>
    );
}
