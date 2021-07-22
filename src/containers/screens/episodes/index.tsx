import MemorizedListItem from 'components/renderItem';
import {SCREENS} from '@app/constants';
import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEpisodesThunk} from 'store/episodes/asyncActions';
import {selectEpisodes} from 'store/episodes/selectors';
import {useTranslation} from 'react-i18next';

const Episodes: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(selectEpisodes);

  useEffect(() => {
    dispatch(fetchEpisodesThunk());
  }, []);
  const {t} = useTranslation();

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <MemorizedListItem
            id={item.id}
            navigateTo={t('description.episodeInfo')}
            name={item.name}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Episodes;
