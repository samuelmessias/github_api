import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Pesquisar from 'pages/Pesquisar';


const Routes = () => (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pesquisar" exact>
          <Pesquisar />
        </Route>        
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;