import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import RootState, {store} from 'Store';
import actions from 'Store/Characters/actions';

const selectCharacters = (state: RootState) => state.characters;

const Characters = () => {
  const {characters} = useSelector(selectCharacters);

  useEffect(() => {
    store.dispatch(actions.addCharactersThunk());
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
