//App.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Login from './src/components/Pages/Login';
import Filmes from './src/components/Pages/CardFilmes';
import Confirmar from './src/components/Pages/Confirmar';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedFilme, setSelectedFilme] = useState(null);

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const response = await Promise.race([
          fetch('https://api.otaviolube.com/api/filmes?populate=*'),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000))
        ]);
        const data = await response.json();
        const filmesData = data.data.map(filme => ({
          ...filme,
          poster: filme.attributes.poster,
        }));
        setFilmes(filmesData);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchFilmes();
  }, []);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleFilmeSelect = (filme) => {
    setSelectedFilme(filme);
  };

  const handleConfirm = () => {
    console.log('Compra feita com sucesso!');
  };
const handleVoltarLogin = () => {
  setAuthenticated(true);
};

if (!authenticated) {
  return <Login handleLogin={handleLogin} />;
};

  if (!authenticated) {
    return <Login handleVoltarLogin={handleVoltarLogin} />;
  }



  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.loading}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.error}>Erro ao carregar filmes</Text>
      </View>
    );
  }

  if (selectedFilme) {
    return (
      <View style={styles.container}>
        <Confirmar filme={selectedFilme} handleConfirm={handleConfirm} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista dos Filmes</Text>
      <Filmes filmes={filmes} handleFilmeSelect={handleFilmeSelect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  error: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f00',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});
