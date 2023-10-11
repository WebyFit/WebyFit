import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ConfigPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.customView1}>

      </View>
      <View style={styles.customView2}>
        <View style={styles.customView3}>
          <Image
            source={require('../assets/fotoPerfil.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.dados}>
          <View style={styles.nome}>
            <Text style={styles.text}>Igor Moreno Boenavides</Text>
            <Image source={require('../assets/verificado.png')} style={styles.verificacao}/>
          </View>
          <Text style={styles.textEmail}>igormorenoboenavides@gmail.com</Text>
        </View>
        <View style={styles.medalhas}>
          <Image
            source={require('../assets/medalha1.png')} 
            style={styles.medalha}
          />
          <Image
            source={require('../assets/medalha2.png')} 
            style={styles.medalha}
          />
          <Image
            source={require('../assets/medalha3.png')} 
            style={styles.medalha}
          />
          <Image
            source={require('../assets/medalha4.png')} 
            style={styles.medalha}
          />
        </View>
      </View>
      <Text style={styles.subtitulo}>Configurações</Text>
      <View style={styles.configuracoes}>
        <View style={styles.configOption}> 
          <View style={styles.bgiconConfig}>
            <Image source={require('../assets/iconConfig.png')} style={styles.iconsConfig}/>
          </View>
          <View style={styles.infoConfig}>
            <Text style={styles.tituloConfig}>Configurações do Perfil</Text>
            <Text style={styles.descricaoConfig}>Atualize e modifique seu perfil</Text>
          </View>
          <View style={styles.bgIconAvancar}>
            <Image source={require('../assets/setaicon.png')} style={styles.setaAvancar}/>
          </View>
        </View>
        <View style={styles.configOption2}> 
          <View style={styles.bgiconConfig}>
            <Image source={require('../assets/iconConfig2.png')} style={styles.iconsConfig}/>
          </View>
          <View style={styles.infoConfig}>
            <Text style={styles.tituloConfig}>Privacidade</Text>
            <Text style={styles.descricaoConfig}>Modifique sua senha</Text>
          </View>
          <View style={styles.bgIconAvancar}>
            <Image source={require('../assets/setaicon.png')} style={styles.setaAvancar}/>
          </View>
        </View>
        <View style={styles.configOption3}> 
          <View style={styles.bgiconConfig}>
            <Image source={require('../assets/iconConfig3.png')} style={styles.iconsConfig}/>
          </View>
          <View style={styles.infoConfig}>
            <Text style={styles.tituloConfig}>Notificações</Text>
            <Text style={styles.descricaoConfig}>Mude suas configurações de notificações</Text>
          </View>
          <View style={styles.bgIconAvancar}>
            <Image source={require('../assets/setaicon.png')} style={styles.setaAvancar}/>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
  },
  customView1: {
    width: '110%', 
    height: '45%', 
    backgroundColor: '#48A332',
    borderRadius: 40,
    position: 'absolute',
    left: '-9%', 
    top: '-5%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  customView2: {
    width: '85%', 
    height: '45%', 
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    position: 'absolute',
    left: '8%',
    top: '10%', 
  },
  customView3: {
    width: '20%', 
    height: '32%', 
    backgroundColor: '#ECECEC',
    position: 'absolute',
    left: '42%', 
    top: '17%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  dados: {
    top: '50%',
    width: '90%',
    height: '20%',
    left: '5%',
  },
  nome: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
  },
  verificacao: {
    width: '7%',
    height: '100%',
    margin: 0,
    padding: 0,
    left: '80%',     
    right: 0, 
    top: -3,   
    textAlign: 'center', 
    position: 'absolute',
  },
  image: {
    top: '1%',
    width: '90%', 
    height: '85%', 
  },
  text: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#48A332',
    position: 'absolute',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    left: 0,     
    right: 0,    
    textAlign: 'center', 
  },  
  textEmail: {
    fontSize: 8,
    fontFamily: 'Roboto',
    color: '#959595',
    position: 'absolute',
    margin: 0,
    padding: 0,
    left: '27%',
    top: '50%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  medalhas: {
    backgroundColor: '#F5F5F5',
    width: '80%',
    height: '20%',
    left: '15%',
    right: '5%',
    top: '35%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  medalha: {
    width: '25%', 
    height: '100%', 
    resizeMode: 'contain',
  },
  subtitulo: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    top: '25%',
    right: '30%',
    color: '#868686',
  },
  configuracoes: {
    width: '85%',
    height: '35%',
    top: '27%',
  },
  configOption: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '30%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  configOption2: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '30%',
    borderRadius: 10,
    top: '3%',
    flexDirection: 'row',
  },
  configOption3: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '30%',
    borderRadius: 10,
    top: '6%',
    flexDirection: 'row',
  },
  bgiconConfig: {
    backgroundColor: '#D9D9D9',
    width: '12%',
    height: '80%',
    marginStart: '2%',
    marginTop: '1%',
    borderRadius: 10,
  },
  iconsConfig: {
    width: '50%',
    height: '55%',
    marginStart: '25%',
    marginTop: '20%'
  },
  infoConfig: {
    marginStart: '3%',
    marginTop: '1%',
    width: '40%',
    height: '70%',
  },
  tituloConfig: {
    color: '#48A332',
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  descricaoConfig: {
    color: '#A7A7A7',
    fontSize: 8,
    fontFamily: 'Roboto',
  },
  bgIconAvancar: {
    width: '10%',
    height: '80%',
    marginTop: '1%',
    marginStart: '32%',
  },
  setaAvancar: {
    width: '100%',
    height: '100%',
    marginStart: '4%'
  },
});

export default ConfigPage;
