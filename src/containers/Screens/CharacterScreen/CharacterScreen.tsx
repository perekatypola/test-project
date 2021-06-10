import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import RootState, {store} from '../../../redux/store';
import actions from '../../../redux/actions/actions';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary';

const selectCharacters = (state: RootState) => state.characters;

const CharacterScreen = () => {
  const {characters} = useSelector(selectCharacters);

  useEffect(() => {
    store.dispatch(actions.addCharactersThunk());
  }, []);

  return (
    <View>
      <ErrorBoundary>
        <FlatList
          data={characters}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.name}
        />
      </ErrorBoundary>
    </View>
  );
};

export default CharacterScreen;
