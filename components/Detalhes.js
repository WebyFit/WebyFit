import { ScrollView, View, Text, StyleSheet, Image} from 'react-native'
      
const Detalhes = ({item, estado}) => {

    const handleEstado = () =>{
        console.log(estado)
        estado({isTelaProduto: false, item})
    }
    
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftIcon}>

        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Detalhes da comida</Text>
        </View>
        <View style={styles.rightIcon}>

        </View>
      </View>

      <View style={styles.circularContainer}>
        <Image
          source={item.imagem}
          style={styles.circularImage}
        />
        <View style={styles.plateInfo}>
          <View style={styles.nameAndPrice}>
            <Text style={styles.plateName}> Gambiarra a'la GBT </Text>
            <Text style={styles.platePrice}> R$15,00 </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.decreaseButton}>-</Text>
            <Text style={styles.valueDisplay}>1</Text>
            <Text style={styles.increaseButton}>+</Text>
          </View>
        </View>
        <View style={styles.moreInfo}>
          <View style={styles.plateRating}>
            <Text style={styles.plateRatingText}>

            </Text>
          </View>
          <View style={styles.plateCalories}>
            <Text style={styles.plateCaloriesText}>
              <Icon name="flame" size={20} color="red" /> 100 Kcal
            </Text>
          </View>
          <View style={styles.deliveryTime}>
            <Text style={styles.deliveryTimeText}>

            </Text>
          </View>
        </View>
        <View style={styles.aboutPlate}>
          <View style={styles.aboutHeader}>
            <Text style={styles.aboutHeaderText}>Sobre a comida</Text>
          </View>
          <View style={styles.aboutContent}>
            <Text style={styles.aboutContentText}>
              Gambiarra à la GBT é o prato definitivo para quem quer uma
              refeição saudável, mas está totalmente sem tempo, ingredientes ou
              habilidades culinárias. Inspirado na alta tecnologia, esse prato é
              uma obra-prima da engenhosidade alimentar!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>

    )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#48A332',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '7%',
    paddingTop: '5%',
  },
  leftIcon: {
    flex: 1,
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 13,
  },
  rightIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  circularContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: '30%',
  },
  circularImage: {
    resizeMode: 'contain',
    width: '90%',
    transform: [{translateY: -180}]
  },
  plateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginLeft: '-18%',
  },
  plateName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  platePrice: {
    color: '#03CD24',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#48A332',
    borderRadius: 20,
    marginLeft: '5%',
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    justifyContent: 'space-between',
  },
  decreaseButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  increaseButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  valueDisplay: {
    color: 'white',
    fontSize: 15,
    paddingHorizontal: '15%',
    fontWeight: 'bold',
  },
  moreInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: '5%',
    marginHorizontal: '1%',
    width: '100%',
    paddingHorizontal: '6%',
  },
  plateRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plateRatingText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#898989',
  },
  plateCalories: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plateCaloriesText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#898989',
  },
  deliveryTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTimeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#898989',
  },
  aboutPlate: {
    marginBottom: '-80%',
    marginHorizontal: '7%',
  },
  aboutHeader: {
    marginBottom: '5%',
  },
  aboutHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  aboutContent: {},
  aboutContentText: {
    fontSize: 12,
    color: '#898989',
  },
});


export default Detalhes