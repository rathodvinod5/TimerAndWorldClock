import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Platform, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Screen = ({
  children
}: {
  children: React.ReactNode
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  });

  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.white}
      />
      {children}
    </SafeAreaView>
  );
}

export default Screen;