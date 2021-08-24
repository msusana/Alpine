import React from 'react';
import { Provider } from "react-redux";
import Versions from './redux/components/Versions';
import store from './redux/store';
import "./styles/index.css";
import Home from './redux/components/Home';
import Color from './redux/components/Color';
import Rims from './redux/components/Rims';
import Sealing from './redux/components/Sealing';
import Equipments from './redux/components/Equipments/Equipments';
import Accessories from './redux/components/Accessories/Accessories';
import Summary from './redux/components/Summary';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Configurator from './redux/components/Configurator';


const App = () => (
  <Provider store={store} >
   
      <main> 
      <h1 className='title'>ALPINE</h1>
        <Router> 
          <Route path='/' exact component={Home}/>
          <Route path='/Color' exact component={Color}/>
          <Route path='/Rims' exact component={Rims}/>
          <Route path='/Sealing' exact component={Sealing}/>
          <Route path='/Equipments' exact component={Equipments}/>
          <Route path='/Accessories' exact component={Accessories}/>
          <Route path='/Summary' exact component={Summary}/>
          <Route path='/Configurator' exact component={Configurator}/>
        </Router>  
    </main> 
     
  </Provider>
)

export default App;