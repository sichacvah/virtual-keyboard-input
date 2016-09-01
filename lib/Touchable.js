'use strict';


import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

export default (Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity);
