import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./screens/LandingPage/LandingPage";
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import ProjectDetail from "./screens/ProjectDetail/ProjectDetail";
import ProjectEdit from "./screens/ProjectEdit/ProjectEdit";
import NewProject from "./screens/NewProject/NewProject";
import Login from "./screens/Login/Login";
import Blog from "./screens/Blog/Blog";
import Contact from "./screens/Contact/Contact";
import Biography from "./screens/Biography/Biography";
import Dashboard from "./screens/Dashboard/Dashboard";

import "./App.css";

import { verifyAdmin } from "./services/admin";

function App() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      const admin = await verifyAdmin();
      setAdmin(admin ? admin : null);
    };
    fetchAdmin();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/biography" component={Biography} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login">
          <Login setAdmin={setAdmin} />
        </Route>

        <Route exact path="/projects">
          <Projects admin={admin} />
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetail admin={admin} />
        </Route>
        <Route exact path="/projects/:id/edit">
          {admin ? <ProjectEdit /> : <Redirect to="/projects/" />}
        </Route>
        <Route exact path="/newproject">
          <NewProject admin={admin} />
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
