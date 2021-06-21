import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCharacters} from 'store/characters/selectors';
import {fetchCharactersThunk} from 'store/characters/asyncActions';

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const {data: characters} = useSelector(selectCharacters);

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
