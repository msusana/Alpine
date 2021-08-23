import React from 'react';
import { Provider } from "react-redux";
import Legende from './redux/components/Legende';
import Versions from './redux/components/Versions';
import store from './redux/store';
import "./styles/index.css"

const App = () => (
  <Provider store={store} >
    <main>
   {/* <Versions /> */}
   <Legende/>
    </main>
  </Provider>
)

export default App;