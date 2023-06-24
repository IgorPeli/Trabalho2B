import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function Login({ handleLogin }) {
  const [username, setLogin] = useState('');
  const [password, setSenha] = useState('');

  const handleLoginPress = () => {
    handleLogin();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImg}>
        <Image 
          style={styles.logoImg}
          source={{ uri: 'https://play-lh.googleusercontent.com/ZwYmLW3JvAA9BOpWXl16fr61jiYtAqLI89tKeyjSz3cTJsEleIjcZzVojWeBxE2_0py4' }}
          resizeMode='contain'
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Login/Email"
        value={username}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '30%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewImg: {
    width: '50%',
    height: '40%',
  },
  logoImg: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
  },
});