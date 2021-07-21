import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '15%',
    borderRadius: 5,
    margin: 2,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
