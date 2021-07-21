import React, {ReactElement, useRef} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectEpisodes} from 'store/episodes/selectors';

const EpisodeInfo = ({route}): ReactElement => {
  const item = useRef({});
  useSelector(selectEpisodes).data.forEach(el => {
    if (el.name === route.params.name) {
      item.current = el;
    }
  });
  const {name, air_date, episode} = item.current;
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Air date: {air_date}</Text>
      <Text>Episode: {episode}</Text>
    </View>
  );
};

export default EpisodeInfo;
