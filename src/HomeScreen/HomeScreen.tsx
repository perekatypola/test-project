import React from 'react';
import {View, Text, Button} from 'react-native';
import type {FC} from 'react';
import {useDispatch} from 'react-redux';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
