import React, {ReactElement} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectEpisode} from 'store/episodes/selectors';

const EpisodeInfo = ({route}): ReactElement => {
  const {name, air_date, episode} = useSelector(selectEpisode(route.params.id));
  const {t} = useTranslation();

  return (
    <View>
      <Text>
        {t('description.name')}: {name}
      </Text>
      <Text>
        {t('description.airDate')}: {air_date}
      </Text>
      <Text>
        {t('description.episode')}: {episode}
      </Text>
    </View>
  );
};

export default EpisodeInfo;
