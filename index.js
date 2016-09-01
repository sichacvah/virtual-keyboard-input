'use strict';

import React, {PropTypes} from 'react';
import {View} from 'react-native';

import Input from './lib/Input';
import Key from './lib/Key';
import KeyFactory from './lib/KeyFactory';
import Keyboard from './lib/Keyboard';
import {VirtualKeyboardInputStyle} from './lib/styles';


export default class VirtualKeyboardInput extends React.Component {
  static Key = Key;
  static KeyFactory = KeyFactory;
  static propTypes = {
    ...Input.propTypes,
    ...Keyboard.propTypes,
    style: PropTypes.object,
  };

  static defaultProps = {style: {}};

  render() {
    const {style, value, onBackspace} = this.props;
    const {InputStyle, KeyboardStyle, KeyStyle} = style;

    return (
      <View style={VirtualKeyboardInputStyle.container, style.container}>
        <Input
          {...this.props}
          style={InputStyle || {}} />
        {this.props.children}
        <Keyboard
          {...this.props}
          style={KeyboardStyle || {}} />
      </View>
    );
  }
}
