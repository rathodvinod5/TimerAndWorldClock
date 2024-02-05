import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Screen from '../../component/screen/Screen';
import TouchableButton from '../../component/button/TouchableButton';
import STYLES from './Styles';


const Home = () => {
  const navigation = useNavigation();

  const handleButtonOnPress = () => {
    navigation.navigate("Timer" as never);
  }

  const handleButtonOnPressClock = () => {
    navigation.navigate("WClock" as never);
  }

  const handleButtonOnPressClockAlt = () => {
    navigation.navigate("WClockPSTIST" as never);
  }

  return (
    <Screen>
      <View style={STYLES.container}>
        <TouchableButton
          buttonTitle='Timer'
          handleButtonOnPress={handleButtonOnPress}
        />

        <TouchableButton
          buttonTitle='WClock-PST-IST'
          handleButtonOnPress={handleButtonOnPressClockAlt}
        />

        <TouchableButton
          buttonTitle='WClock'
          handleButtonOnPress={handleButtonOnPressClock}
        />
      </View>
    </Screen>
  );
}

export default Home;