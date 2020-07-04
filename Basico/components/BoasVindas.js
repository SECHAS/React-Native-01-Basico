import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

function BoasVindas(props) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const [mostraMensagem, setMostraMensagem] = useState(false);

    const _apresentarMensagem = () => {
        if (!nome == '' && !sobrenome == ''){
            setMostraMensagem(true);
        } else{
            Alert.alert(
                'Preenchimento obrigatório',
                'Informe o nome e o sobrenome!',
            [
                {text:'OK'},
            ],
            );
        }
    }
    
    const _limpar = () =>{
        setNome('');
        setSobrenome('');
        setMostraMensagem(false);
    }
  return (
<View style={styles.container}>

    <Text style={styles.titulo}>Identifique-se</Text>

      <TextInput
            style = {styles.campo}
            placeholder="Digite seu nome: "
            onChangeText={nome => setNome(nome)}
            value={nome}
      />
      <TextInput
            style = {styles.campo}
            placeholder="Digite seu sobrenome: "
            onChangeText={sobrenome => setNome(sobrenome)}
            value={sobrenome}
      />

    <View style={styles.buttonContainer}>
        <Button 
            onPress={_apresentarMensagem}  
            title="OK"
            color="#ff4d4d"
        />
    </View>
    
    {mostraMensagem && (
        <View>
<Text style={styles.textos}>Olá, {nome} {sobrenome}! {props.saudacao}</Text>
<Text style={styles.textos}>{mensagem}</Text>
        </View>
    )}
    <View style={styles.buttonContainer}>
        <Button
         onPress={_limpar}
         title="LIMPAR"
         color="#ff4d4d"
        />

    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#000000',
     width: '100%',
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  buttonContainer: {
    marginBottom:5,
    marginTop:5,
    borderRadius:5,
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight:'bold',
  },
  campo:{
      backgroundColor:'#FFFFFF',
      color:'#FFFFFF',
      fontSize:14,
      marginBottom:5,
      marginTop:5,
      height:35,
  },

});
export default BoasVindas;
