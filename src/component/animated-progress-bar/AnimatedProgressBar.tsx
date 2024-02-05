import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

// const ProgressBar: React.FC<{ duration: number }> = ({ duration }) => {
//   const [progressAnimation] = useState(new Animated.Value(0));

//   useEffect(() => {
//     if (duration) {
//       Animated.timing(progressAnimation, {
//         toValue: 1,
//         duration: duration,
//         useNativeDriver: false
//       }).start(() => {
//         progressAnimation.setValue(0);
//       });
//     }
//   }, [duration, progressAnimation]);

//   return (
//     <View style={styles.progressBar}>
//       <Animated.View
//         style={[
//           styles.progressBarInner,
//           {
//             width: progressAnimation.interpolate({
//               inputRange: [0, 1],
//               outputRange: ['0%', '100%'],
//             }),
//           },
//         ]}
//       />
//     </View>
//   );
// };


interface ProgressBarProps {
  duration: number;
  isActive: boolean;
  reset: boolean;
  disableResetValueCallback: () => void,
  toggleReset: () => void
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, isActive, reset, disableResetValueCallback, toggleReset }) => {
  // const [progressAnimation] = useState(new Animated.Value(0));
  // let animationInstance: Animated.CompositeAnimation | null = null;

  // useEffect(() => {
  //   if (isActive) {
  //     animationInstance = Animated.timing(progressAnimation, {
  //       toValue: 1,
  //       duration: duration,
  //       useNativeDriver: false,
  //     });
  //     animationInstance.start(() => {
  //       console.log('end');
  //     });
  //   } else {
  //     if (animationInstance) {
  //       animationInstance.stop();
  //     }
  //   }

  //   return () => {
  //     if (animationInstance) {
  //       animationInstance.stop();
  //     }
  //   };
  // }, [isActive, duration, progressAnimation]);

  // const progressAnimation = useRef(new Animated.Value(0)).current;
  // const animationInstance = useRef<Animated.CompositeAnimation | null>(null);

  // useEffect(() => {

  //   if (isActive) {
  //     animationInstance.current = Animated.timing(progressAnimation, {
  //       toValue: 1,
  //       duration: duration,
  //       useNativeDriver: false,
  //     });
  //     animationInstance.current.start(() => {
  //       console.log('END')
  //       progressAnimation.setValue(0);
  //       // disableResetValueCallback();
  //     });
  //   } else {
  //     if (animationInstance.current) {
  //       animationInstance.current.stop();
  //     }
  //   }

  //   return () => {
  //     if (animationInstance.current) {
  //       animationInstance.current.stop();
  //     }
  //   };
  // }, [isActive, duration, progressAnimation]);

  // useEffect(() => {
  //   if (reset) {
  //     progressAnimation.setValue(0);
  //   }
  // }, [reset, progressAnimation]);

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const animationInstance = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (isActive) {
      animationInstance.current = Animated.timing(progressAnimation, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      });
      animationInstance.current.start();
    } else {
      if (animationInstance.current) {
        animationInstance.current.stop();
      }
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.stop();
      }
    };
  }, [isActive, duration, progressAnimation]);

  useEffect(() => {
    if (reset) {
      progressAnimation.setValue(0);
      toggleReset();
    }
  }, [reset, progressAnimation]);

  // useEffect(() => {
  //   const listener = progressAnimation.addListener(({ value }) => {
  //     if (value === 1) {
  //       progressAnimation.removeListener(listener);
  //       progressAnimation.setValue(0);
  //     }
  //   });

  //   return () => {
  //     progressAnimation.removeListener(listener);
  //   };
  // }, [reset, progressAnimation]);

  return (
    <View style={styles.progressBar}>
      <Animated.View
        style={[
          styles.progressBarInner,
          {
            width: progressAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 20,
    marginBottom: 10,
    height: 10,
    backgroundColor: 'lightgray',
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
  },
  progressBarInner: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
  },
});
