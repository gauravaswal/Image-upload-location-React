import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from '../src/container/Home';
import Googlemap from '../src/components/GoogleMaps'
const App = () => {
  return (
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route exact  path="/imagelocation" component={Googlemap} />
    </Switch>
  );
};
export default App ;