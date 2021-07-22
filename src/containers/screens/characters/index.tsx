import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SCREENS} from '@app/constants';
import {selectCharacters} from 'store/characters/selectors';
import {fetchCharactersThunk} from 'store/characters/asyncActions';
import MemorizedListItem from 'components/renderItem';
import {useTranslation} from 'react-i18next';

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(selectCharacters);
  useEffect(() => {
    dispatch(fetchCharactersThunk());
  }, []);
  const {t} = useTranslation();
  console.log(t('description.characterInfo'));
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <MemorizedListItem
            id={item.id}
            name={item.name}
            navigateTo={t('description.characterInfo')}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Characters;
