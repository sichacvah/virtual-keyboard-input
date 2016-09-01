'use strict';

import {StyleSheet} from 'react-native';

const BORDER_COLOR = '#e7e7e7';
export const KeyStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: BORDER_COLOR,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    backgroundColor: 'transparent',
    width: 119,
    height: 50
  },
  mainText: {
    textAlign: 'center',
    fontSize: 24,
    color: "#424242",
    fontWeight: "200"
  }
});

export const KeyboardStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTopColor: BORDER_COLOR,
    borderLeftColor: BORDER_COLOR,
    overflow: 'hidden'
  },
});

export const InputStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  textInput: {
    color: "#424242",
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18
  },
  value: {
    fontSize: 20,
    color: "#424242",
    flex: 1,
    textAlign: 'center',
    padding: 0
  }
});


export const VirtualKeyboardInputStyle = StyleSheet.create({
  container: {
    flex: 1
  },
});
