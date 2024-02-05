import { TouchableOpacity, StyleSheet } from 'react-native';
import ANT_ICON from 'react-native-vector-icons/AntDesign';


const AddButton = ({
  onPress
}: {
  onPress?: () => void
}): React.JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={STYLES.container}
      onPress={onPress}
    >
      <ANT_ICON name="pluscircleo" size={32} color="teal" />
    </TouchableOpacity>
  );
}

export default AddButton;

const STYLES = StyleSheet.create({
  container: {
    padding: 4,
    // borderWidth: 1
  }
});