import { SetStateAction, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, } from 'react-native';
import STYLES from './Styles';
import ProgressBar from '../../component/animated-progress-bar/AnimatedProgressBar';


const TimerItems = ({ onRemove }: { onRemove?: () => void }) => {
  // const [hours, setHours] = useState('');
  // const [minutes, setMinutes] = useState('');
  // const [seconds, setSeconds] = useState('');

  const [titleH, setTitleH] = useState('00');
  const [titleM, setTitleM] = useState('00');
  const [titleS, setTitleS] = useState('00');

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState('');
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [reset, setReset] = useState(false);

  const handleHoursChange = (text: string) => {
    // Ensure only numbers and maximum of 2 digits
    if (/^\d{0,2}$/.test(text)) {
      setHours(text);
      setTitleH(text);
    }
  };

  const handleMinutesChange = (text: string) => {
    // Ensure only numbers and maximum of 2 digits
    if (/^\d{0,2}$/.test(text)) {
      setMinutes(text);
      setTitleM(text);
    }
  };

  const handleSecondsChange = (text: string) => {
    // Ensure only numbers and maximum of 2 digits
    if (/^\d{0,2}$/.test(text)) {
      setSeconds(text);
      setTitleS(text);
    }
  };

  const disableResetValue = () => {
    setHours(titleH);
    setMinutes(titleM);
    setSeconds(titleS);
    setIsActive(false);
    // setReset(false);
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
      // let totalSeconds = 0;
      // if (parseInt(hours) || parseInt(minutes) || parseInt(seconds)) {
      //   totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
      // } else {
      //   totalSeconds = parseInt(titleH) * 3600 + parseInt(titleM) * 60 + parseInt(titleS);
      // }
      // setTitleH(hours);
      // setTitleM(minutes);
      // setTitleS(seconds);

      interval = setInterval(() => {
        if (totalSeconds > 0) {

          const remainingSeconds = totalSeconds - 1;
          const newHours = Math.floor(remainingSeconds / 3600);
          const newMinutes = Math.floor((remainingSeconds % 3600) / 60);
          const newSeconds = remainingSeconds % 60;

          setHours(newHours.toString().padStart(2, '0'));
          setMinutes(newMinutes.toString().padStart(2, '0'));
          setSeconds(newSeconds.toString().padStart(2, '0'));
        } else {
          if (interval) clearInterval(interval);
          setIsActive(false);
        }
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, hours, minutes, seconds]);

  const setTimerFromBackup = () => {
    const totalSeconds = parseInt(titleH) * 3600 + parseInt(titleM) * 60 + parseInt(titleS);
    setTotalSeconds(totalSeconds);
    setIsActive(!isActive);
    // setReset(false);

    // if (parseInt(titleH) || parseInt(titleM) || parseInt(titleS)) {
    //   const totalSeconds = parseInt(titleH) * 3600 + parseInt(titleM) * 60 + parseInt(titleS);
    //   setTotalSeconds(totalSeconds);
    //   setIsActive(!isActive);
    // }
  }

  const toggleTimer = () => {
    // if (!parseInt(hours) && !parseInt(minutes) && !parseInt(seconds) && !isActive) {
    //   setIsActive(false);
    //   setReset(true);
    //   setHours(titleH);
    //   setMinutes(titleM);
    //   setSeconds(titleS);
    //   setTimerFromBackup();
    // } 
    if (parseInt(hours) || parseInt(minutes) || parseInt(seconds)) {
      const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
      setTotalSeconds(totalSeconds);
      setIsActive(!isActive);
    }
  };

  const resetTimer = () => {
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    setIsActive(false);
    setProgress('');
    setReset(true);
  };

  const toggleReset = () => {
    setReset(false);
  }

  return (
    <View style={STYLES.parentcontainer}>
      <View style={STYLES.inputItemsContainer}>
        <View style={STYLES.inputContainer}>
          <Text style={STYLES.label}>Hr</Text>
          <TextInput
            style={STYLES.input}
            value={hours}
            // value={parseInt(hours) > 0 ? hours : ''}
            onChangeText={handleHoursChange}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>
        <View style={STYLES.inputContainer}>
          <Text style={STYLES.label}>Min</Text>
          <TextInput
            style={STYLES.input}
            value={minutes}
            // value={parseInt(minutes) > 0 ? minutes : ''}
            onChangeText={handleMinutesChange}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>
        <View style={STYLES.inputContainer}>
          <Text style={STYLES.label}>Sec</Text>
          <TextInput
            style={STYLES.input}
            value={seconds}
            // value={parseInt(seconds) > 0 ? seconds : ''}
            onChangeText={handleSecondsChange}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>
      </View>

      {/* <Text>{progress}</Text> */}

      <ProgressBar
        duration={totalSeconds * 1000}
        isActive={isActive}
        reset={reset}
        toggleReset={toggleReset}
        disableResetValueCallback={disableResetValue}
      />

      <View style={STYLES.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleTimer}
          style={STYLES.buttonStyles}
        >
          <Text style={STYLES.buttonTitle}>{isActive ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={resetTimer}
          style={STYLES.buttonStyles}
        >
          <Text style={STYLES.buttonTitle}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onRemove}
          style={STYLES.buttonStyles}
        >
          <Text style={STYLES.buttonTitle}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TimerItems;