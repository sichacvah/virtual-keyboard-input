'use strict';

import React, {PropTypes} from 'react';

import {
  ListView,
  Text,
  Animated,
  View,
  ScrollView
} from 'react-native';
import Key from './Key';
import {KeyboardStyle} from './styles';

export default class Keyboard extends React.Component {
  static propTypes = {
    keys: PropTypes.array,
    style: PropTypes.object,
    keyRender: PropTypes.func,
    renderKeyboardFooter: PropTypes.func,
    renderKeyboardHeader: PropTypes.func
  };

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      anim: new Animated.Value(0),
      dataSource: dataSource.cloneWithRows(this.props.keys),
    };
    this.slideUp = this.slideUp.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.keys !== nextProps.keys) {
      const {dataSource} = this.state;
      this.setState({
        dataSource: dataSource.cloneWithRows(nextProps.keys)
      });
    }
  }

  slideUp(delay, from = 0) {
    const {anim} = this.state;
    return {
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 1000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }

  renderRow(keyProps, id, iid) {
    const {keyRender, style} = this.props;
    const keyStyle = (style.keyStyle ? style.keyStyle : {});
    if (keyRender) {
      return keyRender({keyProps, keyStyle, sectionId, id});
    };
    return (
        <Key {...keyProps} style={keyStyle} key={`${id} - ${iid}`} />
    );
  }

  render() {
    const {style} = this.props;
    return (
      <View style={[KeyboardStyle.container, style.keyboardContainer]}>
        <ListView
          initialListSize={10}
          pageSize={20}
          enableEmptySections={true}
          contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around'}}
          renderRow={this.renderRow.bind(this)}
          dataSource={this.state.dataSource}
          />
      </View>
    );
  }

}
