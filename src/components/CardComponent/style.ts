// src/componentes/CardComponentStyle.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  courseCard: {
    width: 300,
    marginRight: 16,
    padding: 12,
  },
  courseImage: {
    width: '100%',
    height: 180,
  },
  courseInfo: {
    marginTop: 12,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  courseInstructor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 8,
  },
  courseRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  coursePrice: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 8,
  },
  bestSellerButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginTop: 8,
    alignItems: 'center',
    marginLeft: 8,
    alignSelf: 'flex-start',
  },
  bestSellerText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  starIcon: {
    color: '#FFD700',
    marginRight: 4,
  },
});

export default styles;
