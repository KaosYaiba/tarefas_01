import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
    return (
        <View style={StyleSheet.container}>
         <Animatable.view animation="fadeInLeft" delay={500} style={StyleSheet.containerHeader}>
            <text style={styles.message}>Bem-vindo(a)</text>
         </Animatable.view>

           <Animatable.view animation="fadeInUp" style={styles.containerForm}>
            <Text Style={styles.title}>Email</Text>
            <TextInput
            placeholder="Digite um email..."
            style={styles.input}
            />

           <Text Style={styles.title}>Senha</Text>
            <TextInput
            placeholder="Sua senha..."
            style={styles.input}
            />

            <TouchableOpacity style={style.button}>
               <Text style={style.buttonText}>Acessar</Text>
            </TouchableOpacity>


            <TouchableOpacity style={style.buttonRegister}>
               <Text style={style.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>




           </Animatable.view>

        </View>
       );
   
    }


    const style = StyleSheet.create({
      container: {
         flex:1,
         backgroundColor: "#8e38d9",
         containerHeader:{
            marginTop: '14%',
            marginButtom: '8%',
            paddingStart: '5%',
         },
         message:{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#FFF',
         },
         containerForm: {
            backgroundColor: '#FFF',
            flex: 1,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingStart: '5%',
            paddingEnd: '5%',
         },
         title:{
            fontSize: 20,
            marginTop: 28,
         },
         input:{
            borderBottomWidth: 1,
            height: 40,
            marginBottom: 12,
            fontSize: 16,
         },
         button:{
            backgroundColor: "#8e38d9",
            width: '100%',
            borderRadius: 4,
            paddingVertical: 8,
            marginTop: 14,
            justifyContent: 'center',
            alighItens: 'center',
         },
         buttonText:{
            color: '#FFF',
            fontSize: 18,
            fontWeight: 'bold',
         },
         buttonRegister:{
            marginTop: 14,
            alighSelf: 'center',
         },
         registerText: {
            color: '#a1a1a1'
         }

      }
    })