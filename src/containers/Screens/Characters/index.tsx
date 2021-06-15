import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import store from 'Store';
import {RootState} from 'Interfaces/store';
import {createSelector} from 'reselect';
import {addCharactersThunk} from 'Store/Characters/async';

const selectCharacters = createSelector(
  (state: RootState) => state.characters,
  characters => characters,
);

const Characters = () => {
  const {characters} = useSelector(selectCharacters);

  useEffect(() => {
    store.dispatch(addCharactersThunk());
  }, []);

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

export default Characters;
