import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListeVoyages from "./components/ListeVoyages";
import DetailVoyage from "./components/DetailVoyage";
import {createStore} from "redux";
import {Provider} from "react-redux";

const voyages = [
    {
        ville: 'Marrakech',
        prix: 2000,
        image: 'https://visitmarrakech.com/wp-content/uploads/2023/03/10.jpg'
    },
    {
        ville: 'Rabat',
        prix: 900,
        image: 'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/tour-hassan-rabat-morocco-by-migel.jpg?itok=YP8GLwSi'
    },
    {
        ville: 'Casablanca',
        prix: 700,
        image: 'https://mobile.ledesk.ma/wp-content/uploads/2022/08/Casablanca-Imaginium-ONMT-83.jpg',
    }
]

const reducer = (state = voyages, action) => {
    return state
}
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<ListeVoyages/>}/>
                    <Route path={'/voyage/:id'} element={<DetailVoyage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
