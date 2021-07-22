import MemorizedListItem from 'components/renderItem';
import {SCREENS} from '@app/constants';
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
        renderItem={({item}) => (
          <MemorizedListItem
            id={item.id}
            navigateTo={SCREENS.LOCATION_ITEM}
            name={item.name}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Locations;
