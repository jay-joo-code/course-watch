import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import Home from './components/Home';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import DetectDevice from './components/DetectDevice';

const persistor = persistStore(store);

class App extends React.Component {
  
  render() {
    
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DetectDevice />
          <Home />
        </PersistGate>
      </Provider>
      )
  }
}

export default App;
