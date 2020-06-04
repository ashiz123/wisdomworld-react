import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/main.component'
import {Provider} from 'react-redux';
import {ConfigureStore as store, persistor} from './redux/configureStore';
import {loadState, saveState} from './localStorage.component';
import {Example} from './components/example/example.component';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading} from './components/loading/loading.component'



// const persistedState = loadState();


// store.subscribe(() => {
//   saveState(store.getState());
// })




function App() {
  return (
   <Provider store ={store}>
    <BrowserRouter>
    <PersistGate loading={<Loading />}  persistor = {persistor}> 
      <Main />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
