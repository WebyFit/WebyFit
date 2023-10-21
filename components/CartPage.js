import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartPage = () => {
  const items = [
    {
      name: 'Segundo Item',
      price: 'R$10,00',
      rating: 4.0,
    },
    {
      name: 'Terceiro Item',
      price: 'R$12,00',
      rating: 3.7,
    },
    {
      name: 'Quarto Item',
      price: 'R$15,00',
      rating: 4.5,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftIcon}>
          <Icon name="ios-arrow-back" size={20} color="black" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Meus Pedidos</Text>
        </View>
      </View>

      {items.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.plateInfo,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 2,
            padding: 15,
            marginBottom: 20,
          }}
        >
          <Image
            style={{
              ...styles.circularImage,
              width: 50,
              height: 50,
              backgroundColor: 'green',
              borderRadius: 25,
            }}
            source={require('../assets/prato1.png')}
          />
          <View style={styles.nameAndPrice}>
            <Text style={styles.plateName}>{item.name}</Text>
            <Text style={styles.platePrice}>{item.price}</Text>
          </View>
          <View style={styles.plateRating}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.plateRatingText}>
                <Icon name="star" size={20} color="#f2b51f" /> {item.rating}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.decreaseButton}>-</Text>
            <Text style={styles.valueDisplay}>1</Text>
            <Text style={styles.increaseButton}>+</Text>
          </View>
        </View>
      ))}
      <View style={styles.searchContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.searchTitle}>Cupom de Desconto</Text>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Insira o código aqui!"
          placeholderTextColor="#aaa"
        />
        <Icon name="search" size={24} color="black" style={styles.searchIcon} />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalTitle}>Total</Text>
        <Text style={styles.totalAmount}>R$ 15,00</Text>
      </View>
      <View style={styles.perguntaBox}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 36,
  },

  plateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  plateName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  platePrice: {
    color: '#03CD24',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#48A332',
    borderRadius: 20,
    marginLeft: 5,
    padding: 10,
    justifyContent: 'space-between',
  },
  valueDisplay: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  plateRating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  plateRatingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#898989',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  titleWrapper: {
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    borderColor: 'black',
    padding: 4,
    borderRadius: 10,
    marginRight: 1,
  },
  searchTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: 'black',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 6,
  },
  totalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03CD24',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartPage;
