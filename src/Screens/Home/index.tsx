import React from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import homeStyle from './styles';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View style={homeStyle.view}>
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
