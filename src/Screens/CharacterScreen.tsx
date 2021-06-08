import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import RootState from '../redux/store';

const CharacterScreen = () => {
  const selectCharacters = (state: RootState) => state.characters;
  const characters = useSelector(selectCharacters);
  console.log(characters);

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
