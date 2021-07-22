import React, {ReactElement, useRef} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLocation} from 'store/locations/selectors';

const LocationInfo = ({route}): ReactElement => {
  const {name, type, dimension} = useSelector(selectLocation(route.params.id));
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Air date: {type}</Text>
      <Text>Episode: {dimension}</Text>
    </View>
  );
};

export default LocationInfo;
