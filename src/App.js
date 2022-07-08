import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  // Route Component will match all existing components that a are provided in the path and output them.
  // i.e if you have /favourites, it will out put '/' as well as '/favourites'.
  // To combat this, we use the Switch component, which wraps around all the Routes.
  // Switch tells react router that only 1 of the routes should be shown at any one time.
  // Switch however stop searching through all the Route components as soon as it finds a match. That's to say for '/favourites', it will stop searching on '/'.
  // Therfore to comabt this, we need to tell react to not stop searching as soon as it gets a match on the first char, but instead if it is a complete match. We do this by introducing <Route path='/' exact={true}>.

  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
