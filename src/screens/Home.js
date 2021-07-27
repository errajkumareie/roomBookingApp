import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUsers,
  faBed,
  faUser,
  faChild,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Counter from '../components/Counter';
import styles from '../styles/styles.js';

const Home = () => {
  const [roomCount, setRoomCount] = useState(1);
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const minLimit = 1;
  const maxLimit = 4;
  const maxRoomLimit = 5;
  const totalCount = adultsCount + childrenCount;
  const maxCount = roomCount * maxLimit;
  const reducedRoomCount = roomCount - 1;
  const reducedMaxCount = reducedRoomCount * maxLimit;
  const balCount = adultsCount - maxLimit;

  const incrementRoomCounter = () => {
    setRoomCount(roomCount + 1);
    if (totalCount <= maxCount) {
      incrementAdultsCounter();
    }
  };

  const decrementRoomCounter = () => {
    setRoomCount(roomCount - 1);
    if (totalCount > reducedMaxCount) {
      let count = totalCount - reducedMaxCount;
      if (childrenCount > count) {
        setChildrenCount(childrenCount - count);
      } else if (reducedRoomCount !== minLimit) {
        let limit = maxLimit - childrenCount;
        setChildrenCount(0);
        setAdultsCount(adultsCount - limit);
      } else {
        setChildrenCount(0);
        setAdultsCount(adultsCount - balCount);
      }
    }
  };

  const incrementAdultsCounter = () => {
    setAdultsCount(adultsCount + 1);
  };

  const decrementAdultsCounter = () => {
    if (totalCount > roomCount) {
      setAdultsCount(adultsCount - 1);
    }
  };

  const incrementChildrenCounter = () => {
    setChildrenCount(childrenCount + 1);
  };

  const decrementChildrenCounter = () => {
    setChildrenCount(childrenCount - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FontAwesomeIcon icon={faUsers} style={styles.icon} />
        <Text style={styles.title}>
          Choose number of
          <Text style={styles.highlight}> people</Text>
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={[styles.tableContainer, styles.bottomBorder]}>
          <Header name="ROOMS" source={faBed} />
          <Counter
            count={roomCount}
            decrementDisabled={roomCount === minLimit ? true : false}
            incrementDisabled={roomCount >= maxRoomLimit ? true : false}
            onDecrementPressed={decrementRoomCounter}
            onIncrementPressed={incrementRoomCounter}
          />
        </View>
        <View style={[styles.tableContainer, styles.bottomBorder]}>
          <Header name="ADULTS" source={faUser} />
          <Counter
            count={adultsCount}
            decrementDisabled={adultsCount === minLimit ? true : false}
            incrementDisabled={totalCount >= maxCount ? true : false}
            onDecrementPressed={decrementAdultsCounter}
            onIncrementPressed={incrementAdultsCounter}
          />
        </View>
        <View style={styles.tableContainer}>
          <Header name="CHILDREN" source={faChild} />
          <Counter
            count={childrenCount}
            decrementDisabled={childrenCount === 0 ? true : false}
            incrementDisabled={totalCount >= maxCount ? true : false}
            onDecrementPressed={decrementChildrenCounter}
            onIncrementPressed={incrementChildrenCounter}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
