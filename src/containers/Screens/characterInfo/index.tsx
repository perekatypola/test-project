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
  console.log(item.current);
  const renders = useRef(0);
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
      <Text>renders: {++renders.current}</Text>
    </View>
  );
};

const MemorizedCharacterInfo = React.memo(
  CharacterInfo,
  (prevProps, nextProps) => {
    console.log(prevProps.route.params.name);
    if (prevProps.route.params.name === nextProps.route.params.name) {
      return true;
    } else {
      return false;
    }
  },
);

export default MemorizedCharacterInfo;
