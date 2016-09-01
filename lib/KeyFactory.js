'use strict';

class KeyFactory {
  static BASIC_KEY = "BASIC_KEY";
  static TEXT_KEY = 'TEXT_KEY';
  static IMAGE_KEY = 'IMAGE_KEY';

  static getKeyClass(type) {
    switch (type) {
      case KeyFactory.BASIC_KEY:
        return (props) => new BasicKey(props);
      case KeyFactory.TEXT_KEY:
        return (props) => new TextKey(props);
      case KeyFactory.IMAGE_KEY:
        return (props) => new ImageKey(props);
      default:
        new Error('Not class defined for this type ' + type);
    }
  }
}

class AbstractKey {
  constructor() {
    this.getProps = this.getProps.bind(this);
  }

  getProps() {
    throw new Error('NOT IMPLEMENTED');
  }
}

class BasicKey extends AbstractKey {
  constructor({onPress, style}) {
    super();
    this.props = {
      layout: 'text',
      onPress,
      style,
    };
    this.getProps = this.getProps.bind(this);
  }

  getProps(mainText, props) {
    console.log(this.props);
    return {
      ...this.props,
      ...props,
      mainText,
      onPress: () => this.props.onPress(mainText),
    };
  }
}

class TextKey extends AbstractKey {
  constructor({onPress, onLongPress, style}) {
    super();
    this.props = {
      layout: 'text',
      onPress,
      style,
    };
  }

  getProps(mainText, addinitionalText, props) {
    return {
      ...this.props,
      mainText,
      addinitionalText,
      onPress: () => this.props.onPress(mainText),
      ...props
    };
  }
}

class ImageKey extends AbstractKey {
  constructor({onPress, onLongPress, style}) {
    super();
    this.props = {
      layout: 'image',
      onPress,
      style,
    };
  }

  getProps(image, val, props) {
    return {
      ...this.props,
      image,
      onPress: () => this.props.onPress(val),
      ...props
    };
  }
}

export default KeyFactory;
