import { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import STYLES from './Styles';
import { LocationDataType } from './types';
import TouchableButton from '../../component/button/TouchableButton';
import { getCurrentTimeInIST } from './Utils'


const LocationClock = ({
  city,
  removeItemHandler,
}: {
  city: LocationDataType,
  removeItemHandler: (id: string) => void,
}) => {
  const startTime = getCurrentTimeInIST(city.fields.timezone);
  const [time, setTime] = useState(startTime);
  const timezoneAbbreviation = startTime.split(" ")[2];
  const offsetAbbreviation = startTime.split(" ")[3];

  var n = useRef<ReturnType<typeof setTimeout> | null>(null);
  var t = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    const timeOffset = 1000 - new Date(Date.now()).getMilliseconds();
    n.current = setTimeout(() => {
      t.current = setInterval(() => {
        setTime(getCurrentTimeInIST(city.fields.timezone));
      });
    }, timeOffset);

    return function cleanup() {
      n.current = null;
      if (t.current) clearInterval(t.current);
    };
  }, [city.fields.timezone]);

  const [timeDig, timeOfDay] = time.split(" ");
  const [hours, minutes, seconds] = timeDig.split(":");

  const onPressRemoveIcons = () => {
    removeItemHandler(city.fields.asciiname);
  }

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