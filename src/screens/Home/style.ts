import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    backgroundColor: '#000',
    padding: 16,
  },
  userIconContainer: {
    marginRight: 12,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  userOccupation: {
    fontSize: 14,
    color: '#B8A8E9',
    fontWeight: 'bold',
  },
  specialOfferContainer: {
    paddingVertical: 24,
  },
  specialOfferTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'left',
  },
  specialOfferDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 8,
    textAlign: 'left',
  },
  recommendedContainer: {
    marginTop: 32,
  },
  recommendedTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  flatListContainer: {
    paddingLeft: 16,
  },
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
    alignSelf: 'flex-start'
  },
  
  bestSellerText: {
    color: '#FFFFFF',
    fontSize: 12,  // Fonte menor
    fontWeight: 'bold',
  },
  
  starIcon: {
    color: '#FFD700',
    marginRight: 4,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#000',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default styles;
