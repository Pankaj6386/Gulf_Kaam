import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import {CustomStatusBar} from './components/CustomStatusBar';
import Routes from './navigation/Routes';

const index = () => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={'#6C789F'} />
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};

export default index;
