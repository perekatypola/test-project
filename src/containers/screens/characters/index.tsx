import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCharacters} from 'store/characters/selectors';
import {fetchCharactersThunk} from 'store/characters/asyncActions';
import MemorizedListItem from 'components/renderItem';

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharactersThunk());
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <MemorizedListItem name={item.name} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Characters;
