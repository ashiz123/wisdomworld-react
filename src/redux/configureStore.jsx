
import logger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';

import {RegisterReducer} from './register/register.reducers';
import rootReducer from './rootReducers';
// import ReduxThunk from 'redux-thunk'; 
import thunk from 'redux-thunk'; 
import {persistStore} from 'redux-persist'




export const ConfigureStore = 
    createStore( rootReducer ,
    compose(
            applyMiddleware(thunk,logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
          )
    );


    export const persistor = persistStore(ConfigureStore)


    export default {ConfigureStore, persistor}



    // export const store =  createStore(rootReducer, compose(
//     applyMiddleware(...middlewares),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )  );

