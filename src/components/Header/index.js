import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from '../../styles/styles.js';

const Header = props => {
  return (
    <View style={styles.innerContainer}>
      <FontAwesomeIcon icon={props.source} style={styles.icon} />
      <Text style={styles.subTitle}>{props.name}</Text>
    </View>
  );
};
export default Header;
