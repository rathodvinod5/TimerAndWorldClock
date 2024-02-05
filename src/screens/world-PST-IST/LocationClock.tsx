import { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import STYLES from './Styles';
import { LocationDataType, ZoneType } from './types';
import TouchableButton from '../../component/button/TouchableButton';
import { getCurrentTimeInIST } from './Utils'


const LocationClock = ({
  zone,
  city,
  removeItemHandler,
}: {
  city: LocationDataType,
  removeItemHandler: (id: string) => void,
  zone: ZoneType,
}) => {
  const startTime = getCurrentTimeInIST(zone); //city.fields.timezone
  const [time, setTime] = useState(startTime);


  var n = useRef<ReturnType<typeof setTimeout> | null>(null);
  var t = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    const timeOffset = 1000 - new Date(Date.now()).getMilliseconds();
    n.current = setTimeout(() => {
      t.current = setInterval(() => {
        setTime(getCurrentTimeInIST(zone)); //city.fields.timezone
      });
    }, timeOffset);

    return function cleanup() {
      n.current = null;
      if (t.current) clearInterval(t.current);
    };
  }, [zone]);

  const [timeDig, timeOfDay] = time.split(" ");
  const [hours, minutes, seconds] = timeDig.split(":");

  const onPressRemoveIcons = () => {
    removeItemHandler(city.fields.asciiname);
  }

  const timezoneAbbreviation = startTime.split(" ")[2];
  const offsetAbbreviation = startTime.split(" ")[3];

  return (
    <View style={STYLES.locationCont} key={city.id}>
      <View style={STYLES.locationDetailsCont}>
        <Text style={STYLES.locationTitleAlt}>{city.fields.asciiname}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={STYLES.timeZoneTitle}>{timezoneAbbreviation}</Text>
          <Text style={STYLES.timeZoneTitle}>{offsetAbbreviation}</Text>
        </View>

        <Text style={STYLES.currentTimeTitle}>
          {hours}:{minutes}:{seconds} {timeOfDay}
        </Text>
      </View>
      <View style={STYLES.closeButtonCont}>
        <TouchableButton
          handleButtonOnPress={onPressRemoveIcons}
          buttonStyles={STYLES.closeIconButtonStyles}
        >
          <AntIcon name="close" size={26} />
        </TouchableButton>
      </View>
    </View>
  );
}

export default LocationClock;