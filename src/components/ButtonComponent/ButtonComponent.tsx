import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'

interface ButtonComponentProps {
  iconName: string;
  text: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={20} color="#fff" style={styles.icon} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
