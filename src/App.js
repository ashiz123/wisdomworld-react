import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/main.component'
import {Provider} from 'react-redux';
import {ConfigureStore as store} from './redux/configureStore';
import {loadState, saveState} from './localStorage.component';




// const persistedState = loadState();


// store.subscribe(() => {
//   saveState(store.getState());
// })




function App() {
  return (
   <Provider store ={store}>
    <BrowserRouter>
     <Main />
    </BrowserRouter>
    </Provider>
  )
}

export default App;
