import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Container, Menu } from 'semantic-ui-react'
import ComicDetailContainer from './containers/ComicDetailContainer'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import ComicList from './components/ComicList/ComicList'

function App(props) {
  return (
    <Container styles={{ marginTop: '5px' }}>
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
            <Route path="/comics/:comicId" component={ComicDetailContainer} />
            <Route path="/comics">
              <ComicList />
            </Route>
            <Route path="/">
              <Redirect to="/comics" />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </Container>
  )
}

export default App
