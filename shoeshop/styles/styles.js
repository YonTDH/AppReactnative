import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
        flex: 1, 
        padding: 16,
        // paddingBottom: 80
    },
  title: {
        fontSize: 24,
        fontWeight: 'bold', 
        marginVertical: 16 
    },
  categorySection: { 
     marginVertical: 10
    },
  category: { 
        alignItems: 'center', 
        marginHorizontal: 10 
    },
  categoryImage: { 
        width: 60, 
        height: 60, 
        borderRadius: 30
    },
  promoSection: { 
        padding: 16, 
        backgroundColor: '#f2f2f2',
        marginVertical: 10,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
  promoTitle: { 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
  promoDiscount: { 
        fontSize: 16, 
        color: '#555' 
    },
  promoButton: { 
        marginTop: 10, 
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 10 
    },
  promoButtonText: { 
        color: '#fff' 
    },
  promoTextContainer: {
    flex: 1, 
    justifyContent: 'center', 
  },

  promoImageContainer: {
    marginLeft: 10, 
  },

  promoImage: {
    width: 120, 
    height: 120, 
    borderRadius: 8, 
  },
    sectionTitle: { 
          fontSize: 18, 
          marginVertical: 10 
      },
  recommendedItem: { 
      width: 120, 
      marginRight: 10, 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      padding: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
    },
  recommendedImage: {
      width: 100,
      height: 100,
      borderRadius: 8,
      marginBottom: 5,
},
  categoryTabs: { 
        marginVertical: 10
    },
  tab: { 
        paddingHorizontal: 20, 
        paddingVertical: 10, backgroundColor: '#ddd', 
        marginRight: 10 
    },
  productItem: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: 16, borderBottomWidth: 1, 
        borderBottomColor: '#eee' 
    },
  productImage: { 
        width: 50, 
        height: 50 
    },
  cartItem: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: 16, borderBottomWidth: 1, 
        borderBottomColor: '#eee' 
    },
  cartImage: { 
        width: 50, 
        height: 50 
    },
  quantityControl: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
  voucherInput: { 
        borderWidth: 1, 
        borderColor: '#ccc', 
        padding: 8, 
        marginVertical: 10 
    },
  totalText: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginVertical: 10 
    },
  recommendedSection: {
      marginTop: 10,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
searchFilterContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginVertical: 10,
  paddingHorizontal: 15,
  backgroundColor: '#f9f9f9',
  borderRadius: 10,
  elevation: 2, // Android shadow effect
  shadowColor: '#000', // iOS shadow effect
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
},

searchInput: {
  flex: 1,
  height: 40,
  paddingHorizontal: 10,
  backgroundColor: '#fff',
  borderRadius: 8,
  fontSize: 16,
  color: '#333',
},

  filterButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    elevation: 2, // Android shadow effect
    shadowColor: '#000', // iOS shadow effect
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  filterIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },

  searchButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    elevation: 2, // Android shadow effect
    shadowColor: '#000', // iOS shadow effect
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#333', // You can adjust the color of the icon
  },
  filterButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    elevation: 2, // Hiệu ứng đổ bóng cho Android
    shadowColor: '#000', // Hiệu ứng đổ bóng cho iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: '#333', // Màu của biểu tượng
  },

  priceInputContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
priceInput: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginHorizontal: 5 },
priceRangeSeparator: { fontSize: 16, alignSelf: 'center' },
applyButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 5, marginTop: 20 },
applyButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },

});

export default styles;
