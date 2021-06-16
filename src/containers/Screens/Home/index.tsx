import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Button} from 'react-native';
import {SCREENS} from 'Constants';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Discover Rick and Morty"
        onPress={() => {
          navigation.navigate(SCREENS.MAIN);
        }}
      />
    </View>
  );
};
export default Home;
