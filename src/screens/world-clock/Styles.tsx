import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const STYLES = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    // paddingHorizontal: width * 0.1
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: width * 0.1,
    marginTop: 20
  },
  locationOuterCont: {
    justifyContent: 'flex-start',
    marginTop: 40,
    gap: 20,
  },
  textInputStyles: {
    width: width * 0.8,
    height: 48,
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 8
  },
  flatlistCont: {
    maxHeight: height * 0.4,
    // maxHeight: 50,
    // borderWidth: 1,
    gap: 2,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 6
  },
  activityCont: {
    position: 'absolute',
    right: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  itemStyles: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: '100%',
    justifyContent: 'center',
    // marginVertical: 2,
    // backgroundColor: 'teal'
  },
  locationTitle: {
    fontSize: 16,
    color: '#424242',
    fontWeight: 'bold'
  },
  locationCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 3,
    },
  },
  locationDetailsCont: {
    flex: 8,
  },
  locationTitleAlt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#424242',
  },
  timeZoneTitle: {
    fontSize: 15,
    color: '#424242',
  },
  currentTimeTitle: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '600',
    color: '#424242',
  },
  closeButtonCont: {
    flex: 1.3
  },
  closeIconButtonStyles: {
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default STYLES;