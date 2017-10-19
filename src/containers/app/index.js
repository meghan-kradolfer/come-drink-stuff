import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import tracker from '../../utils/google-analytics';


const App = () => (
  <div>
    <main>
      <Route exact path="/" component={tracker(Home)}/>
      <Route exact path="/about-us" component={tracker(About)}/>
    </main>
  </div>
);

export default App
