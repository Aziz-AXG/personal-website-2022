import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import HomePage from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
    
  
  );
}

export default App;
