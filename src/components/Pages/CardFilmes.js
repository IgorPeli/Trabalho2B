import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const baseUrl = 'https://api.otaviolube.com';

export default function CardFilmes({ filmes, handleFilmeSelect }) {
  return (
    <View style={styles.container}>
      {filmes.map((filme, index) => (
        <View key={filme.id} style={[styles.filme, index === 0 && styles.firstFilme]}>
          {filme.poster ? (
            <Image
              style={styles.poster}
              source={{ uri: baseUrl + filme.attributes.poster.data.attributes.url }}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholder} />
          )}
          <View style={styles.infoContainer}>
            <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
            <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
            <View style={styles.linha}>
              <Text style={styles.label}>Data de Lançamento:</Text>
              <Text style={styles.valor}>
                {new Date(filme.attributes.publishedAt).toLocaleDateString()}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleFilmeSelect(filme)}
            >
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  filme: {
    flexDirection: 'row',
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  firstFilme: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 20,
    marginBottom: 20,
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Arial',
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
    fontFamily: 'Arial',
  },
  sinopse: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Arial',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: 'gray',
    marginRight: 5,
  },
  valor: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  botao: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginTop: 16,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});