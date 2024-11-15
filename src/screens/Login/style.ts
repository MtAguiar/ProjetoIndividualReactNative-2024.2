import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 100,
    left: 20,
    backgroundColor: 'transparent',
  },
  header: {
    top: -50,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  terms: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
    color:'white',
  },
  buttonContainer: {
    alignItems: 'center',
  },
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
  footer: {
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  createAccountText: {
    color: '#aaa',
    fontSize: 16,
  },
  createAccountLink: {
    color: '#8a2be2',
  },
});

export default styles;
