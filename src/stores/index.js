import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from 'redux-logger'
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducers';


export default function configureStore () {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      rootReducer, 
      applyMiddleware(
        thunkMiddleWare
      )
    )
  } else {
    const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) 
    : compose;

    const store = createStore(
      rootReducer, 
      composeEnhancers (
        applyMiddleware(
          thunkMiddleWare,
          loggerMiddleware 
        )
      )      
    )

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }

    return store

  }
}
