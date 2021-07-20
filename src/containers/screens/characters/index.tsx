import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SCREENS} from '@app/constants';
import {selectCharacters} from 'store/characters/selectors';
import {fetchCharactersThunk} from 'store/characters/asyncActions';
import MemorizedListItem from 'components/renderItem';

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(selectCharacters);
  console.log('render characters');
  useEffect(() => {
    dispatch(fetchCharactersThunk());
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <MemorizedListItem
            name={item.name}
            navigateTo={SCREENS.CHARACTER_ITEM}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Characters;
