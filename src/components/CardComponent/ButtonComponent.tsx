import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'

interface CardComponentProps {
  image: any;
  title: string;
  instructor: string;
  rating: number;
  price: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ image, title, instructor, rating, price }) => {
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

  return (
    <View style={styles.courseCard}>
      <Image source={image} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{title}</Text>
        <Text style={styles.courseInstructor}>{instructor}</Text>
        <View style={styles.courseRating}>
          {renderStarRating(rating)}
        </View>
        <Text style={styles.coursePrice}>{price}</Text>
        <TouchableOpacity style={styles.bestSellerButton}>
          <Text style={styles.bestSellerText}>Mais Vendidos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardComponent;
