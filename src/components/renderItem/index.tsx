import {useNavigation} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

interface RenderItem {
  navigateTo: string;
  name: string;
  id: number;
}

const ListItem = ({navigateTo, name, id}: RenderItem): ReactElement => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title={name}
        onPress={() => {
          navigation.navigate(navigateTo, {name, id});
        }}
      />
    </View>
  );
};

const MemorizedListItem = React.memo(ListItem);
export default MemorizedListItem;
