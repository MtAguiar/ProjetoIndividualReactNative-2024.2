import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import styles from './style';
import ButtonComponent from  '../../components/ButtonComponent/ButtonComponent';
const Login = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.closeButton}>
      <Icon name="close" size={24} color="#fff" />
    </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.terms}>
          Ao usar nossos serviços, você concorda com nossos <Text style={styles.bold}>Termos</Text> e a <Text style={styles.bold}>Declaração de Privacidade</Text>.
        </Text>
      </View>
      
      <ButtonComponent iconName="envelope" text="Entrar com e-mail" onPress={() => {}} />
<ButtonComponent iconName="apple" text="Fazer login com Apple" onPress={() => {}} />
<ButtonComponent iconName="facebook" text="Fazer login com Facebook" onPress={() => {}} />
<ButtonComponent iconName="google" text="Fazer login com Google" onPress={() => {}} />
      
      <View style={styles.footer}>
        <Text style={styles.createAccountText}>
          É novo aqui? <Text style={styles.createAccountLink}>Criar conta</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
