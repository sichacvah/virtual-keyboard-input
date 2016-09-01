'use strict';

import React, { PropTypes } from 'react';

import {
  View,
  Text,
  TextInput,
} from 'react-native';
import Touchable from './Touchable';
import {InputStyle} from './styles';


export default class Input extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onBackspace: PropTypes.func.isRequired,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    renderIcon: PropTypes.func,
    style: PropTypes.object,
    renderLeftMenu: PropTypes.func,
    renderTextInputIcon: PropTypes.func
  };

  static defaultProps = {
    value: "",
    onBackspace: () => {}
  };

  constructor(props) {
    super(props);
    this.onBackspace = this.onBackspace.bind(this);
    this.onHoldBackspace = this.onHoldBackspace.bind(this);
    this.renderLeftMenu = this.renderLeftMenu.bind(this);
    this.renderRightIcon = this.renderRightIcon.bind(this);
  }

  onBackspace() {
    const newVal = this.props.value.slice(0, -1);
    this.props.onBackspace(newVal);
  }

  onHoldBackspace() {
    if (this.pressed) {
      this.onBackspace();
      setTimeout(this.onHoldBackspace, 200);
    }
  }

  renderLeftMenu() {
    if (this.props.renderLeftMenu) {
      return this.props.renderLeftMenu();
    }
  }

  renderRightIcon() {
    return (
      <Touchable
        onPressIn={() => {
          this.pressed = true;
          this.onHoldBackspace();
        }}
        onPressOut={() => (this.pressed = false)}>
        {this.props.renderRightIcon ?
          this.props.renderRightIcon() :
          ( <View>
              <Text>{"<-"}</Text>
            </View>)
        }
      </Touchable>
    );
  }

  render() {
    const {style, value, placeholder} = this.props;
    return (
      <View style={[InputStyle.container, style.container]}>
        {this.renderLeftMenu()}
        {this.props.renderTextInputIcon && this.props.renderTextInputIcon()}
        <TextInput
          style={[InputStyle.textInput, style.textInput]}
          value={value}
          editable={false}
          placeholder={placeholder}
          underlineColorAndroid='transparent' />
        {this.renderRightIcon()}
      </View>
    );
  }
}
