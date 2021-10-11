import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './Store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'
import firebase  from './Store/fbconfig'
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div><h2>Loading...</h2></div>;
  return children
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true ,// Firestore for Profile instead of Realtime DB
  
}

const store=createStore(rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase}))
  ,reduxFirestore(firebase,rrfConfig))
  );
const rrfProps={
  firebase,
  config:rrfConfig,
  dispatch:store.dispatch,
  createFirestoreInstance,
}


  ReactDOM.render(
    <React.StrictMode>
     <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
     <AuthIsLoaded>
       <App />
       </AuthIsLoaded>
       </ReactReduxFirebaseProvider>
       </Provider> 
    </React.StrictMode>,
    document.getElementById('root')
  );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

