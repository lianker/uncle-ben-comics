import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Container, Menu } from 'semantic-ui-react'
import ComicDetail from "./components/ComicDetail/ComicDetail";


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ComicList from './components/ComicList/ComicList'

function App(props) {
  return (
    <Container styles={{marginTop: '5px'}}>
      <div className="App-header">Uncle ben Comics</div>
      <Router>
        <div>
          <Menu>
            <Menu.Item as={Link} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/comics">
              Comics
            </Menu.Item>
          </Menu>

          <Switch>
            <Route path="/comics/:comicId" component={ComicDetail} />
            <Route path="/comics">
              <ComicList />
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  )
}

export default App
