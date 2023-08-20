import MyNavbar from './Navbar';
import MyHome from './Home';
import MySkils from './Skills';
import MyExperience from './Experience';
import MyProjects from './Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/resume">
              <MyHome />
            </Route>
            <Route path="/resume/skills">
              <MySkils />
            </Route>
            <Route path="/resume/experience">
              <MyExperience />
            </Route>
            <Route path="/resume/projects">
              <MyProjects />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
