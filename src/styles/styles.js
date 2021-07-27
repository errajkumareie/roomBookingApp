import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'column',
    height: 100,
    padding: 10,
  },
  boxContainer: {
    flexDirection: 'column',
    height: 220,
    borderWidth: 1,
  },
  tableContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    color: 'navy', // navy (`#000080`)
    marginLeft: 15,
  },
  subTitle: {
    fontSize: 18,
    color: 'navy',
    marginLeft: 15,
    marginTop: 5,
    justifyContent: 'flex-start',
  },
  counterText: {
    fontSize: 22,
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 2 : 0,
    justifyContent: 'flex-start',
    width: 28,
  },
  highlight: {
    fontWeight: 'bold',
  },
  icon: {
    padding: 15,
    color: 'navy',
  },
  plusIcon: {
    padding: 15,
    marginLeft: -10,
    color: 'mediumvioletred',
  },
  bottomBorder: {
    borderBottomWidth: 1,
  },
});
