import { TouchableOpacity, StyleSheet } from 'react-native';
import ANT_ICON from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";


const BackButton = ({
  onPress
}: {
  onPress?: () => {}
}): React.JSX.Element => {

  const navigation = useNavigation();

  const onPressBackButton = () => {
    navigation.goBack();
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={STYLES.container}
      onPress={onPressBackButton}
    >
      <ANT_ICON name="left" size={24} style={{ fontWeight: '600' }} />
    </TouchableOpacity>
  );
}

export default BackButton;

const STYLES = StyleSheet.create({
  container: {
    padding: 4
  }
});