import React, {ReactElement, useRef} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLocations} from 'store/locations/selectors';

const LocationInfo = ({route}): ReactElement => {
  const item = useRef({});
  useSelector(selectLocations).data.forEach(el => {
    if (el.name === route.params.name) {
      item.current = el;
    }
  });
  const {name, type, dimension} = item.current;
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Air date: {type}</Text>
      <Text>Episode: {dimension}</Text>
    </View>
  );
};

export default LocationInfo;
