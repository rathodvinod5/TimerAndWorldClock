import { StyleSheet } from 'react-native';

const STYLES = StyleSheet.create({
  parentcontainer: {
    // flex: 1,
    // width: '100%',
    borderWidth: 1,
    backgroundColor: 'tomato'
  },
  container: {
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
});

export default STYLES;