import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
});

export default styles;
