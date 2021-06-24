import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ListItem = ({name}: RenderItem): ReactElement => (
  <View style={styles.container}>
    <Text>{name}</Text>
  </View>
);

const MemorizedListItem = React.memo(ListItem);
export default MemorizedListItem;
