import Form from "./components/Form";
import LivreList from "./components/LivreList";
import Covid from "./components/Covid";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav style={{
                    backgroundColor: 'royalblue',
                    height: '2rem',
                    lineHeight: '2rem',
                    display: 'flex',
                    gap: '10px'
                }}>
                    <Link to={'/'}>IMC</Link>
                    <Link to={'livres'}>Livres</Link>
                    <Link to={'covid'}>Covid</Link>
                </nav>
                <Routes>
                    <Route path={'/'} element={<Form/>}/>
                    <Route path={'covid'} element={<Covid/>}/>
                    <Route path={'livres'} element={<LivreList/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
