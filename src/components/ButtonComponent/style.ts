import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 1,
  },
  icon: {
    marginRight: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
