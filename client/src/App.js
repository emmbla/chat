import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Join from './components/join/Join'
import Chat from './components/chat/Chat'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    )
  }
}
