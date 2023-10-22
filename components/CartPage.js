import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarPage = () => {
  const items = [
    {
      name: "Gambiarra a'la GBT",
      price: 'R$15,50',
      rating: 4.5,
      starStyle: {}, 
      imageSource: require("../assets/prato1.png"),
    },
    {
      name: "Fernando a'la Ele    ",
      price: 'R$20,00',
      rating: 4.8,
      starStyle: {},
      imageSource: require("../assets/prato2.png"),
    },
    {
      name: "Omelete a'la Ovo    ",
      price: 'R$12,50',
      rating: 4.1,
      starStyle: {},
      imageSource: require("../assets/prato3.png"),
    },
  ];

  // BOTÃO DE CONFIRMAÇÃO DE COMPRA !!

  const handleConfirmation = () => {
    Alert.alert('Compra realizada', 'Você recebeu desconto!');
  };

  // FUNÇÃO PARA NAVEGAÇÃO DE PÁGINA !!

  const navigation = useNavigation();

  const handleNavigateToHomePage = () => {
    navigation.navigate('HomePage');
  };

  return ( 
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleNavigateToHomePage} style={{ width: '15%', height: '20%' }}>
            <Image source={require('../assets/returnIcon.png')} style={{ width: '100%', height: '100%' }}/>
          </TouchableOpacity>
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
                borderRadius: 10,
              }}
              source={item.imageSource}
            />
            <View style={styles.nameAndPrice}>
              <Text style={styles.plateName}>{item.name}</Text>
              <Text style={styles.platePrice}>{item.price}</Text>
            </View>

            <View style={styles.plateRating}>
              <View style={{ flexDirection: 'row', alignItems: 'center', ...item.starStyle }}>
              <Image source={require('../assets/starIcon.png')} style={{ width: '30%', height: '50%', marginRight: '10%' }}/>
                <Text style={styles.plateRatingText}>
                  {item.rating}
                </Text>
              </View>
            </View>

            {/* Duplicar o componente com botões */}
            <View style={styles.buttonContainer}>
              <Text style={styles.decreaseButton}>-</Text>
              <Text style={styles.valueDisplay}>1</Text>
              <Text style={styles.increaseButton}>+</Text>
            </View>
            {/* Fim da duplicação do componente com botões */}
          </View>
        ))}

        {/* Título e campo de pesquisa */}
        <View style={styles.searchContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.searchTitle}>Cupom de Desconto</Text>
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Inserir o código"
            placeholderTextColor="#aaa"
          />
          <Image source={require('../assets/lupaicon.png')} style={{ width: '10%', height: '60%' }}/>
        </View>
        {/* Fim do título e campo de pesquisa */}

        {/* Novo título "Total" e texto "R$ 15,00" */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalTitle}>Total</Text>
          <Text style={styles.totalAmount}>R$ 15,00</Text>
        </View>
      </ScrollView>
      <View style={styles.perguntaBox}>
          <TouchableOpacity
            style={styles.blueButton}
            onPress={handleConfirmation}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 5,
    paddingTop: 0,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '20%',
  },
  nameAndPrice: {
    marginLeft: '3%',
  },
  plateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  plateName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  platePrice: {
    color: '#03CD24',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#48A332',
    borderRadius: 10,
    marginLeft: 20,
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
    marginLeft: '3%',
    marginRight: '0%',
    width: '12%',
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
    marginTop: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  titleWrapper: {
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  searchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  searchIcon: {
    padding: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 60,
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
  blueButton: {
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 60,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CarPage;
