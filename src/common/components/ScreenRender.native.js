'use strict';

import React, {
  StyleSheet,
  Text
} from 'react-native';

export default function (props, state) {
  return (
    <Text style={styles.screen}>
      {state.displayScreen}
    </Text>
  );
}

var styles = StyleSheet.create({
  screen: {
    color: '#ffffff',
    fontSize: 70,
    fontWeight: '200'
  }
});
