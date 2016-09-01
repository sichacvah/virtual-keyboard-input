'use strict';

import React, {PropTypes} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import {KeyStyle} from './styles';
import Touchable from './Touchable';

export default class Key extends React.Component {
  static propTypes = {
    layout: PropTypes.oneOf(['text', 'image']).isRequired,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    mainText: PropTypes.string,
    addinitionalText: PropTypes.string,
    style: PropTypes.object,
    image: PropTypes.object
  };

  static defaultProps = {
    layout: 'text',
  };

  renderContent(layout, {mainText, style, addinitionalText}) {
    if (layout === 'text') {
      return (
        <View style={[KeyStyle.container, style.container]}>
          <Text style={[KeyStyle.mainText, style.mainText]}>
            {mainText}
          </Text>
          <Text style={[KeyStyle.addinitionalText, style.addinitionalText]}>
            {addinitionalText}
          </Text>
        </View>
      );
    } else if (layout === 'image') {
      return (
        <View style={[KeyStyle.container, style.container]}>
          <Image image={image} style={[KeyStyle.keyImage, style.keyImage]} />
        </View>
      );
    }
    throw new Error("Layout error " + layout);
  }

  render() {
    const {layout, onPress, onLongPress, mainText, style} = this.props;
    const content = this.renderContent(layout, this.props);
    return (
      <Touchable
        onPressDelay={0}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[KeyStyle.touchable, style.touchable]}>
        {content}
      </Touchable>
    );
  }
}
