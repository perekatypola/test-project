import React, {ReactElement, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'types/store';
import {createSelector} from 'reselect';
import {fetchCharactersThunk} from 'store/characters/asyncActions';

const selectCharacters = createSelector(
  (state: RootState) => state.characters,
  characters => characters,
);

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const {characters} = useSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharactersThunk());
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
