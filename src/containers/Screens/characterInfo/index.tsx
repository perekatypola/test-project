import React, {ReactElement, useRef} from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCharacters} from 'store/characters/selectors';

const CharacterInfo = ({route}): ReactElement => {
  const item = useRef({});
  useSelector(selectCharacters).data.forEach(el => {
    if (el.name === route.params.name) {
      item.current = el;
    }
  });
  const {name, species, gender, image} = item.current;
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{width: 400, height: 400}}
      />
      <Text>Name: {name}</Text>
      <Text>Species: {species}</Text>
      <Text>Gender: {gender}</Text>
    </View>
  );
};

export default CharacterInfo;
