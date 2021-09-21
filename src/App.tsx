import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { TodoPage } from './pages/TodoPage';

const App: (React.FC) = () => {
    
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Switch>
          <Route component={TodoPage} path="/" exact/>
          {/* <Route component={AboutPage} path="/about" /> */}
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
