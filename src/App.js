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
    <Container>
      <Grid container>
        <Grid item xs={12} md={4} lg={3} style={{ background: "yellow" }}>
          <Profile></Profile>
        </Grid>
        <Grid item xs style={{ background: "red" }}>
          <Header></Header>
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio></Portfolio>
              </Route>
              <Route path="/">
                <Resume></Resume>
              </Route>
            </Switch>
          </Router>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
