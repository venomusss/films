import Form from "./Components/Form";
import List from "./Components/List";
import {useState} from "react";
import Details from "./Components/Details";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    let [films, setFilms] = useState([]);
    let getFilms = async (e) => {
        e.preventDefault();
        let search = e.target.elements.film.value;
        if (search) {
            const api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=382a4abd2d7f797cd56b0fbcf78591fc&query=${search}`);
            const data = await api.json();
            setFilms(data.results)
        }
    }
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={"/details/:id"}>
                        <Details/>
                    </Route>
                    <Route path={"/"}>
                        <Form getFilms={getFilms}/>
                        <List films={films}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
