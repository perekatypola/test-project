import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import RootState, {store} from '../redux/store';
import actions from '../redux/actions/actions';

const CharacterScreen = () => {
  const selectCharacters = (state: RootState) => state.characters;
  const characters = useSelector(selectCharacters);
  console.log(characters);
  useEffect(() => {
    store.dispatch(actions.addCharactersThunk());
  });

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default CharacterScreen;
