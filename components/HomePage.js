import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import add from '../assets/add.png'

import { produtos } from '../produtos';

const HomePageTab = () => {
  console.log(produtos)
  return (
    <ScrollView >
        <View style={styles.container}>
        {
          produtos.map((value, key) =>{
            return(
              <Item 
                key={key}
                produto={value}
              />
            )
          })
        }
        </View>
    </ScrollView>
  );
};

const Item = (props) => {
  const produto = props.produto;
  const imagePath = `../assets/JIFC.png`;

  return (
    <View  style={styles.container}>
      <Image
        source={require( `../assets/JIFC.png`) }
        defaultSource={require('../assets/erro.png')}
        style={{ width: 100, height: 100 }} // Ajuste o tamanho conforme necessário
      />
      <Text style={styles.title}>
        {produto.nome}
      </Text>
      <View style={styles.addPrice}>
        <Text style={styles.time}>
          {produto.tempoPreparo} min
        </Text>
        <Text>
          {produto.rating}/5
        </Text>
      </View>
      <View style={styles.addPrice}>
        <Text style={styles.price}>
          {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.price)} 
        </Text>
        <Image
          source={add}
          style={{width: 50, height: 50}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  time: {
    textAlign: 'left'
  },
  addPrice: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  item:  {
    flex: 1,
    alignItems: 'center'

  },
  price: {
    fontSize: 18,
    backgroundColor: '#cccccc',
    margin: 2,
    padding: 4,
    paddingRight: 60,
    borderRadius: 8,
    transform: [{translateX: 20}]
  }
});

export default HomePageTab;
