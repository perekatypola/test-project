import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectEpisode} from 'store/episodes/selectors';

const EpisodeInfo = ({route}): ReactElement => {
  const {name, air_date, episode} = useSelector(selectEpisode(route.params.id));
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Air date: {air_date}</Text>
      <Text>Episode: {episode}</Text>
    </View>
  );
};

export default EpisodeInfo;
