import React from 'react';
import {
   View,
   Text,
   StyleSheet,
   Image,
   TouchableOpacity
   } from 'react-native';

   import * as Animatable from 'react-native-animatable';

   import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
   const navigation = useNavigation();
    return (
        <View style={styles.container}>

           <view style={styles.containerLogo}>
            <Animatable.Image
            animation="flipInY" 
            source={require('../../assets/logo.png')}
            style= {{ width: '100%' }}
            resizeMode= "contain"
            />
           </view>

           <Animatable.view delay={600} animation="fadeInUp" style={styles.containerform}>
            <Text style={styles.title}>Mensagens e chamadas em qualquer lugar!</Text>
            <Text style={styles.text}>Faça o login</Text>

            <TouchableOpacity 
             style={styles.button}>
             onPress={() => navigation.navigate('SignIn')}
               <Text style={style.buttonText}>Entrar</Text>
            </TouchableOpacity>

           </Animatable.view>

        </View>
       );
   
    }

    const styles = StyleSheet.create({
      container: {
       flex:1,
       backgroundColor: "#8e38d9",
      },
      containerLogo:{
         flex:2,
         backgroundColor: "#8e38d9",
         justifyContent: 'center',
         alighItems: 'center',
      },
      containerform: {
         flex: 1,
         backgroundColor: "#FFF",
         borderTopLeftRadius: 25,
         borderTopRightRadius: 25,
         paddingStart: '5%',
         paddingEnd: '5%'

      },
      title:{
         fontSize: 24,
         fontWeight: 'bold',
         marginTop: 28,
         marginBottom: 12,
      },
      text:{
         color: '#a1a1a1',
      },
      button:{
         position: 'absolute',
         backgroundColor: "#8e38d9",
         borderRadius: 50,
         paddingVertical: 8,
         width: '60%',
         alighSelf: 'center',
         bottom: '15%',
         alighItems: 'center',
         justifyContent: 'center',

      },
      buttonText: {
         fontSize: 18,
         color: 'FFF',
         fontWeight: 'bold',
      }
    })