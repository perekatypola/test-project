import React from 'react';
import {View, Text, Button} from 'react-native';
import type {FC} from 'react';
import {useDispatch} from 'react-redux';
import styles from '../Styles/Stylesheet';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.homeView}>
      <Button
        title="Load characters"
        onPress={() =>
          dispatch({
            type: 'Add characters',
            payload: [{name: 'Morty'}, {name: 'Rick'}],
          })
        }
      />
    </View>
  );
};
export default HomeScreen;
