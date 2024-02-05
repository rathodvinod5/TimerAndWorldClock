import React from 'react';
import { View } from 'react-native';
import STYLES from './Styles';
import Screen from '../../component/screen/Screen';
import TextInputContainer from './TextInputContainer';
import useClockController from './Controller';
import LocationClock from './LocationClock';
import { ZoneType } from './types';
import SwitchButtons from '../../component/switch-buttons/SwitchButtons';
import Header from '../../component/header/Header';


const WorldClockPSTAndIST = () => {
  const { locations, onSelectLocation, removeItemHandler } = useClockController();

  const [currZone, setCurrZone] = React.useState<ZoneType>('PST')

  const onPressButton = (zone: ZoneType) => {
    setCurrZone(zone);
  }

  return (
    <Screen>
      <View style={STYLES.container}>
        <View style={{ width: '100%' }}>
          <Header title='World Clock' />
        </View>

        <View style={STYLES.innerContainer}>
          <TextInputContainer
            onSelectLocation={onSelectLocation}
            locationsLen={locations.length}
          />

          <View style={STYLES.locationOuterCont}>
            {locations.length ? (
              <SwitchButtons onPressButton={onPressButton} />
            ) : null}
            {locations.map((location) => (
              <LocationClock
                zone={currZone}
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

export default WorldClockPSTAndIST;