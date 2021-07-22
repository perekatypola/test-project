import React, {ReactElement} from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCharacter} from 'store/characters/selectors';
import styles from './styles';

const CharacterInfo = ({route}): ReactElement => {
  const {name, species, gender, image} = useSelector(
    selectCharacter(route.params.id),
  );
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text>Name: {name}</Text>
      <Text>Species: {species}</Text>
      <Text>Gender: {gender}</Text>
    </View>
  );
};

export default CharacterInfo;
