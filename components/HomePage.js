import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import add from '../assets/add.png'

import { produtos } from '../produtos';

const HomePageTab = () => {
  const [search, setSearch] = useState('')
  const [produtosLista, setProdutos] = useState(produtos)

  const filtrarProduto = (e) =>{ 
    
    console.log(e)
    listaFiltrada = produtos.filter((val)=>{
      const item = val.nome.toLocaleLowerCase()
      const lowerSearch = e.toLocaleLowerCase()
      return item.includes(lowerSearch)
    })
    setProdutos(listaFiltrada)


    console.log(listaFiltrada)
  }
  return (
    <ScrollView style={{margin: 20}} >
      <View style={styles.heading}>
        <Image
          source={require('../assets/verificado.png')} 
        />
        <Text style={{ fontWeight: 'bold', fontSize: 18}}>Balneário Gaivota - SC</Text>
        <Image
          source={require('../assets/fotoPerfil.png')}
          style={{
            width: 60, 
            height: 60,
            borderRadius: 10,
            
          }}
          />
      </View>
      <Text style={{color: '#48A332', fontSize: 16, fontWeight: 'bold'}}>Olá Igor!</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Procure sua comida!</Text>
        <TextInput
        style={styles.search}
        placeholder='Busque seu delivery saudável'
        onChangeText={e=>filtrarProduto(e)}
        />
        {/* <View style={styles.container}>
        {
          produtosLista.map((value, key) =>{
            return(
              <Item 
                key={key}
                produto={value}
              />
            )
          })
        }
        </View> */}
        <FlatList
          data={produtosLista} 
          renderItem={({item})=> <Item item={item}/>}
          keyExtractor={(item) => item.id} 
          numColumns={2}
        />

    </ScrollView>
  );
};

const Item = ({item}) => {
  const imagePath = `../assets/JIFC.png`;

  useEffect(()=>{
    console.log(item)
  },[])

  return (
    <View  style={styles.container}>
      <Image
        source={item.imagem}
        defaultSource={require('../assets/erro.png')}
        style={{ width: 150, height: 150 }} 
      />
      <Text style={styles.title}>
        {item.nome}
      </Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={{marginRight: 50}}>
          {item.tempoPreparo} min
        </Text>
        <Text>
          {item.rating}/5
        </Text>
      </View>
      <View style={styles.addPrice}>
        <Text style={styles.price}>
          {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.price)} 
        </Text>
        <Image
          source={add}
          style={{width: 48, height: 48, transform: [{translateX: -16}]}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  time: {
    alignItems: 'left'
  },
  heading: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    // margin: 10
  },
  search : {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#cccc',
    borderRadius: 9,
    padding: 8,
    marginTop: 20
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
    // padding: 10
    marginBottom: 30,
    marginTop: 30
  },
  title: {
    fontSize: 18,
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
    padding: 6,
    paddingRight: 60,
    borderRadius: 10,
    transform: [{translateX: 26}]
  }
});

export default HomePageTab;
