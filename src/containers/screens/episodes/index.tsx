import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEpisodesThunk} from 'store/episodes/asyncActions';
import {selectEpisodes} from 'store/episodes/selectors';

const Episodes: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(selectEpisodes);

  useEffect(() => {
    dispatch(fetchEpisodesThunk());
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Episodes;
