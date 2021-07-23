import React, {ReactElement} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLocation} from 'store/locations/selectors';

const LocationInfo = ({route}): ReactElement => {
  const {name, type, dimension} = useSelector(selectLocation(route.params.id));
  const {t} = useTranslation();

  return (
    <View>
      <Text>
        {t('description.name')}: {name}
      </Text>
      <Text>
        {t('description.type')}: {type}
      </Text>
      <Text>
        {t('description.dimension')}: {dimension}
      </Text>
    </View>
  );
};

export default LocationInfo;
