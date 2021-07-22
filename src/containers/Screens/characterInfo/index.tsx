import React, {ReactElement} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCharacter} from 'store/characters/selectors';
import styles from './styles';

const CharacterInfo = ({route}): ReactElement => {
  const {name, species, gender, image} = useSelector(
    selectCharacter(route.params.id),
  );
  const {t} = useTranslation();

  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text>
        {t('description.name')}: {name}
      </Text>
      <Text>
        {t('description.species')}: {species}
      </Text>
      <Text>
        {t('description.gender')} {gender}
      </Text>
    </View>
  );
};

export default CharacterInfo;
