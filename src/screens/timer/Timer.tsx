import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import STYLES from './Styles';
import Screen from '../../component/screen/Screen';
import Header from '../../component/header/Header';
import AddButton from '../../component/button/AddButton';
import TimerItems from './TimerItems';


const TimerDashboard = () => {
  const [timers, setTimers] = useState<JSX.Element[]>([]);


  const addTimer = () => {
    setTimers([
      ...timers,
      <TimerItems key={Date.now()} onRemove={() => removeTimer(Date.now())} />,
    ]);
    timers.forEach
  };

  const removeTimer = (key: number) => {
    setTimers(timers.filter((timer) => Number(timer.key) !== key));
  };


  return (
    <Screen>
      <View style={STYLES.container}>
        <Header
          title='All Timers'
          showAction={<AddButton onPress={addTimer} />}
        />
        <View style={{ paddingTop: 20, paddingBottom: 50 }}>
          <ScrollView
            automaticallyAdjustKeyboardInsets={true}
            contentContainerStyle={{ paddingLeft: 5, paddingRight: 10, paddingTop: 10, gap: 20 }}
          >
            {timers.map((timer) => timer)}
          </ScrollView>
        </View>
      </View>
    </Screen>
  );
}

export default TimerDashboard;