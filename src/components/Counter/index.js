import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/styles.js';

const Counter = props => {
  return (
    <View style={styles.innerContainer}>
      <TouchableOpacity
        disabled={props.decrementDisabled}
        activeOpacity={0.9}
        onPress={props.onDecrementPressed}>
        <FontAwesomeIcon icon={faMinusCircle} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.counterText}>{props.count}</Text>
      <TouchableOpacity
        disabled={props.incrementDisabled}
        activeOpacity={0.9}
        onPress={props.onIncrementPressed}>
        <FontAwesomeIcon icon={faPlusCircle} style={styles.plusIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
