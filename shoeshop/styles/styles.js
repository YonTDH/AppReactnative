import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
        flex: 1, padding: 16 
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
        alignItems: 'center' 
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
  sectionTitle: { 
        fontSize: 18, 
        marginVertical: 10 
    },
  recommendedItem: { 
      width: 120, // Giới hạn chiều rộng mỗi mục
      marginRight: 10, // Khoảng cách giữa các mục
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



});

export default styles;
