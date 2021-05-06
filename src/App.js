import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="top_60">
    <Container>
      <Grid container spacing={7}>
        <Grid item xs={12} md={4} lg={3} sm={12}>
          <Profile></Profile>
        </Grid>
        <Grid item xs>
          <Header></Header>
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio></Portfolio>
              </Route>
              <Route path="/resume">
                <Resume></Resume>
              </Route>
            </Switch>
          </Router>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default App;
