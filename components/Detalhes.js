import { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, Button, TouchableOpacity, Modal} from 'react-native'

/*
* A "tela" de detalhes do produto não é uma tela acessível pelo react-navigation, ela simplesmente é um componente
* que é colocado substituindo a HomePage. Imagine que ela é uma sub-tela.
*/
      
const Detalhes = ({item, estado}) => {
    const [quantidade, setQuantidade] = useState(1)
    const [modalVisible, setModalVisible] = useState(false)

    const handleEstado = () =>{
        estado({isTelaProduto: false, item})
    }

    const increaseQuantidade = () => {
        setQuantidade(quantidade + 1 )
    }

    const decreaseQuantidade = () =>{
        setQuantidade(quantidade <= 1 ? 1 : quantidade - 1)
    }
    
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={e=>handleEstado()} style={styles.voltar}>
            <Image
                style={{width: 30, height: 30}}
                source={require('../assets/voltar.png')}
            />
        </TouchableOpacity>
        <View style={styles.header}>
            <View style={styles.leftIcon} onPress={e=>handleEstado()}>
            </View>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Detalhes da comida</Text>
            </View>
            <View style={styles.rightIcon}>

            </View>
        </View>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
        }}>
            <View style={styles.containerModal}>
                <Text style={styles.textModal}>
                    {quantidade > 1 ? "Itens adicionados ao carrinho" : "Item adicionado ao carrinho" } 
                </Text>
                <TouchableOpacity style={styles.buttonModal} onPress={e=>setModalVisible(!modalVisible)}>
                    <Text style={styles.textModal}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <View style={styles.circularContainer}>
            <Image
            source={item.imagem}
            style={styles.circularImage}
            />
            <View style={styles.plateInfo}>
            <View >
                <Text style={styles.plateName}> 
                    {item.nome}
                </Text>
                <Text style={styles.platePrice}>
                    {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.price)}             
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.increaseTouch} onPress={e=>decreaseQuantidade()}>
                    <Text style={styles.decreaseButton} >-</Text>
                </TouchableOpacity>
                <View style={styles.valueDisplay}>
                    <Text style={styles.value}>{quantidade}</Text>
                </View>
                <TouchableOpacity style={styles.decreaseTouch} onPress={e=>increaseQuantidade()} >
                    <Text style={styles.increaseButton} >+</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.adicionar}>
                <Button
                    title="Adicionar ao carrinho!" 
                    onPress={e=>setModalVisible(!modalVisible)}
                    color="#48A332"
                />
            </View>
            <View style={styles.moreInfo}>
            <View style={styles.plateRating}>
                <Text style={styles.plateRatingText}>

                </Text>
            </View>
            <View style={styles.plateCalories}>
                <Text style={styles.plateCaloriesText}>
                </Text>
            </View>
            <View style={styles.deliveryTime}>
                <Text style={styles.deliveryTimeText}>

                </Text>
            </View>
            </View>
            <View style={styles.aboutPlate}>
            <View style={{margin: 20}}>
                <View style={styles.aboutHeader}>
                    <Text style={styles.aboutHeaderText}>Sobre a comida</Text>
                </View>
                <View style={styles.aboutContent} >
                    <Text style={styles.aboutContentText} >
                        {item.desc}
                    </Text>
                </View>
            </View>
            </View>
        </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: '#48A332',
        padding: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        top: '40%',
        borderRadius: 15,
            shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    },
    textModal: {
        margin: 15,
        fontSize: 18,
        color: 'white',

    },
    buttonModal: {
        alignItems: 'center',
        backgroundColor: "#51b738",
        margin: 10,
        borderRadius: 10
    },
    voltar: {
        margin: 10,
        backgroundColor: "#51b738",
        width: 50,
        height: 50,
        padding: 10, 
        borderRadius:  40
    },
    adicionar: {
        marginTop: 40,
    },
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
        fontWeight: 'bold',
        fontSize: 18,
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
        transform: [{translateY: -180}],
        marginBottom: -180
    },
    plateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: '5%',
        marginLeft: 20,
    },
    plateName: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    platePrice: {
        color: '#03CD24',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 7
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 9,
        justifyContent: 'center',
    },
    increaseTouch: {
        height: 40,
        width: 41,
        backgroundColor: '#48A332',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    decreaseTouch: {
        height: 40,
        width: 40,
        // backgroundColor: 'red',
        backgroundColor: '#48A332',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
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
        backgroundColor: '#48A332',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60
    },
    value: {
        color: 'white',
        fontSize: 15,
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
        // marginBottom: '-80%',
        // marginHorizontal: '7%',
    },
    aboutHeader: {
        marginBottom: '5%',
    },
    aboutHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    aboutContentText: {
        marginBottom: 100,
        fontSize: 15,
        color: '#898989',
    },
});


export default Detalhes