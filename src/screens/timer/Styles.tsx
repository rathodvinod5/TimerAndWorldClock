import { StyleSheet } from 'react-native';

const STYLES = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  parentcontainer: {
    // flex: 1,
    backgroundColor: 'white',
    elevation: 5,
    // shadowColor: '#000',
    // shadowOffset: { width: 5, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 3,
    },
    borderRadius: 20
  },
  inputItemsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 6,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: 70,
    textAlign: 'center',
    height: 60
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  buttonStyles: {
    marginBottom: 20,
    width: 80,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    // height: 48,
    backgroundColor: 'teal',
  },
  buttonTitle: {
    color: '#fff',
    alignSelf: 'center',
  }
});

export default STYLES;