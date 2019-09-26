/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import FirstScreen from './src/FirstScreen';
import {store} from './StoreConfig';
const App = () => {
  return (
    <Provider store={store}>
      <FirstScreen />
    </Provider>
  );
};

export default App;
