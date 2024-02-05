import React from 'react';
import { View } from 'react-native';
import STYLES from './Styles';
import Screen from '../../component/screen/Screen';
import TextInputContainer from './TextInputContainer';
import useClockController from './Controller';
import LocationClock from './LocationClock';
import Header from '../../component/header/Header';

const WorldClock = () => {

  const { isLoading, locations, onSelectLocation, removeItemHandler } = useClockController();

  return (
    <Screen>
      <View style={STYLES.container}>
        <View style={{ width: '100%' }}>
          <Header title='World Clock' />
        </View>
        <View style={STYLES.innerContainer}>
          <TextInputContainer
            // isLoading={isLoading}
            onSelectLocation={onSelectLocation}
            locationsLen={locations.length}
          // getData={getData}
          />

          <View style={STYLES.locationOuterCont}>
            {locations.map((location) => (
              <LocationClock
                key={location.id}
                city={location}
                removeItemHandler={removeItemHandler} />
            ))}
          </View>
        </View>
      </View>
    </Screen>
  );
}

export default WorldClock;