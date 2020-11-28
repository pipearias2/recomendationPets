import React, {useCallback} from 'react';
import './App.css';
import Registry from './components/Registry';
import SignIn from './components/SignIn';
import Question from './components/Questions';
import Feed from './components/Feed';
import {useHistory} from 'react-router-dom';
import { SingleBed } from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//TODO: Crear router, crear componente de prueba para testear la ruta,
//https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link

function App() {
  //agregar un hook
  const history = useHistory();
  return (
    <div className="App">
      <Router>
        <div>
          <hr />
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/registry">
              <Registry />
            </Route>
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/questions">
              <Question />
            </Route>
            <Route path="/feed">
              <Feed />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
