import Header from '../Header/Header';
import Users from '../Users/Users';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid>
      <Header />
      <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/user/:id' component={Profile} />
        <Route>
          <Redirect to={'/'} />
        </Route>
      </Switch>
    </Grid>
  );
}

export default App;
