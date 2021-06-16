import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import store from 'Store';
import {RootState} from 'Interfaces/store';
import {createSelector} from 'reselect';
import {fetchCharactersThunk} from 'Store/Characters/asyncActions';

const selectCharacters = createSelector(
  (state: RootState) => state.characters,
  characters => characters,
);

const Characters = () => {
  const {characters} = useSelector(selectCharacters);

  useEffect(() => {
    store.dispatch(fetchCharactersThunk());
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
