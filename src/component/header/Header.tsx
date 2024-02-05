import { StyleSheet, Text, View } from 'react-native';
import FONT_SIZE from '../../util/font-size/Fonts';
import ANT_ICON from 'react-native-vector-icons/AntDesign';
import BackButton from '../button/BackButton';

const Header = ({
  showAction,
  title,
}: {
  title: string,
  showAction?: React.JSX.Element
}) => {
  return (
    <View style={STYLES.container}>
      <View style={STYLES.iconContainer}>
        <BackButton />
      </View>
      <View style={STYLES.titleContainer}>
        <Text style={STYLES.title}>{title}</Text>
      </View>
      {showAction ? (
        <View style={STYLES.actionContainer}>
          {showAction}
        </View>
      ) : null}
    </View>
  );
}

export default Header;

const STYLES = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconContainer: {
    // flex: 1,
    // borderWidth: 1
  },
  titleContainer: {
    flex: 1,
    paddingLeft: 12
  },
  actionContainer: {
    // flex: 1
  },
  title: {
    fontSize: FONT_SIZE[24],
    fontWeight: 'bold'
  }
});