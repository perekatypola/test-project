import {useNavigation} from '@react-navigation/native';
import React, {ReactElement, useRef} from 'react';
import {View, Button, Text} from 'react-native';
import styles from './styles';

const ListItem = ({navigateTo, name}: RenderItem): ReactElement => {
  const navigation = useNavigation();
  const renders = useRef(0);
  console.log(name);
  return (
    <View style={styles.container}>
      <Button
        title={name}
        onPress={() => {
          navigation.navigate(navigateTo, {name});
        }}
      />
      <View>
        <Text>renders: {++renders.current}</Text>
      </View>
    </View>
  );
};

const MemorizedListItem = React.memo(ListItem, (prevProps, nextProps) => {
  if (prevProps.name === nextProps.name) {
    return true;
  } else {
    return false;
  }
});
export default MemorizedListItem;
