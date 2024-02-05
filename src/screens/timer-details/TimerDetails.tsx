
import { useEffect } from 'react';
import { View, Text, TextInput, Button, } from 'react-native';
import STYLES from './Styles';
import { SetStateAction, useState } from 'react';
import Screen from '../../component/screen/Screen';

const TimerDetails = () => {
  // const [hours, setHours] = useState('');
  // const [minutes, setMinutes] = useState('');
  // const [seconds, setSeconds] = useState('');

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState('');

  const handleHoursChange = (text: string) => {
    // Ensure only numbers and maximum of 2 digits
    if (/^\d{0,2}$/.test(text)) {
      setHours(text);
    }
  };

  const handleMinutesChange = (text: string) => {
    // Ensure only numbers and maximum of 2 digits
    if (/^\d{0,2}$/.test(text)) {
      setMinutes(text);
    }
  };

  const handleSecondsChange = (text: string) => {
    // Ensure only numbers and maximum of 2 digits
    if (/^\d{0,2}$/.test(text)) {
      setSeconds(text);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

      interval = setInterval(() => {
        if (totalSeconds > 0) {
          const remainingSeconds = totalSeconds - 1;
          const newHours = Math.floor(remainingSeconds / 3600);
          const newMinutes = Math.floor((remainingSeconds % 3600) / 60);
          const newSeconds = remainingSeconds % 60;

          if (parseInt(hours) > 0) setHours(newHours.toString().padStart(2, '0'));
          if (parseInt(minutes) > 0) setMinutes(newMinutes.toString().padStart(2, '0'));
          if (parseInt(seconds) > 0) setSeconds(newSeconds.toString().padStart(2, '0'));
          setProgress(
            `${newHours.toString().padStart(2, '0')}:${newMinutes
              .toString()
              .padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
          );
        } else {
          if (interval) clearInterval(interval);
          setIsActive(false);
          setProgress('00:00:00');
        }
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, hours, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    setIsActive(false);
    setProgress('');
  };

  return (
    <View style={STYLES.parentcontainer}>
      <Screen>
        <View style={STYLES.container}>
          <View style={STYLES.inputContainer}>
            <Text style={STYLES.label}>Hr</Text>
            <TextInput
              style={STYLES.input}
              value={parseInt(hours) > 0 ? hours : ''}
              onChangeText={handleHoursChange}
              // onChangeText={setHours}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Text style={STYLES.label}>Min</Text>
            <TextInput
              style={STYLES.input}
              value={parseInt(minutes) > 0 ? minutes : ''}
              onChangeText={handleMinutesChange}
              // onChangeText={setMinutes}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Text style={STYLES.label}>Sec</Text>
            <TextInput
              style={STYLES.input}
              value={parseInt(seconds) > 0 ? seconds : ''}
              onChangeText={handleSecondsChange}
              // onChangeText={setSeconds}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>
        </View>

        <View>
          <Button title={isActive ? 'Pause' : 'Start'} onPress={toggleTimer} />
          <Button title="Reset" onPress={resetTimer} />
          {/* <Button title="Remove" onPress={onRemove} /> */}
        </View>
        {/* <View>
          <Text>{progress}</Text>
        </View> */}
      </Screen>
    </View>
  );
}

export default TimerDetails;