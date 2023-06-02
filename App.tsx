import React from 'react';

import {Text, View} from 'react-native';

import { MagicButton } from './src';

function App(): JSX.Element {
  return (
    <View>
      <Text>This is mockupmagic package </Text>
      <MagicButton title='Submit' />
    </View>
  );
}

export default App;
