import MemorizedListItem from 'components/renderItem';
import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLocationsThunk} from 'store/locations/asyncActions';
import {selectLocations} from 'store/locations/selectors';

const Locations: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(selectLocations);

  useEffect(() => {
    dispatch(fetchLocationsThunk());
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <MemorizedListItem name={item.name} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Locations;
