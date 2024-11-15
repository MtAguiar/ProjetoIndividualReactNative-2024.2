import React from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CardComponent from '../../components/CardComponent/ButtonComponent'

const courses = [
  {
    id: '1',
    image: require('../../assets/java.png'),
    title: 'Java 360°: Curso Completo',
    instructor: 'Carlos Tosin',
    rating: 5,
    price: 'R$ 24,90',
  },
  {
    id: '2',
    image: require('../../assets/github.png'),
    title: 'GIT HUB para iniciantes',
    instructor: 'Willian Justen',
    rating: 4.5,
    price: 'R$ 24,90',
  },
];

const renderStarRating = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Ionicons
        key={i}
        name={i <= rating ? 'star' : 'star-outline'}
        style={styles.starIcon}
        size={16}
      />
    );
  }
  return stars;
};

const Home = () => {
  return (
    <ScrollView style={[styles.container, {backgroundColor: "#000"}]}>
      <View style={styles.userSection}>
        <View style={styles.userIconContainer}>
          <Ionicons name="person-circle" size={50} color="#B8A8E9" />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Olá, Matheus</Text>
          <Text style={styles.userOccupation}>Editar ocupação e interesses</Text>
        </View>
      </View>

      <Image
        source={require('../../assets/home.png' )}
        style={styles.headerImage}
      />

      <View style={styles.specialOfferContainer}>
        <Text style={styles.specialOfferTitle}>Oferta especial – últimas horas para economizar!</Text>
        <Text style={styles.specialOfferDescription}>
          Sua oferta exclusiva para alunos de longa data: cursos a partir de R$ 24,90 cada por tempo limitado
        </Text>
      </View>

      <Text style={styles.recommendedTitle}>Recomendados para você</Text>
      <FlatList
  data={courses}
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.flatListContainer}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <CardComponent
      image={item.image}
      title={item.title}
      instructor={item.instructor}
      rating={item.rating}
      price={item.price}
    />
  )}
/>

      <View style={styles.bottomNavigation}>
        <View style={styles.navItem}>
          <Ionicons name="star" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Em destaque</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="search" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Pesquisar</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="play-circle" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Meu aprendizado</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="heart" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Lista de desejos</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="person" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Conta</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
