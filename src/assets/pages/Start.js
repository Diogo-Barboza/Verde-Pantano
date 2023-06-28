import React, { useState } from 'react';
import styles from './Start.module.css';
import LinkButton from '../components/LinkButtom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAK3i1B3kh12ltJdbTZNzVIBTEHyH2ygYo",
    authDomain: "pcwizard-bdb56.firebaseapp.com",
    databaseURL: "https://pcwizard-bdb56-default-rtdb.firebaseio.com",
    projectId: "pcwizard-bdb56",
    storageBucket: "pcwizard-bdb56.appspot.com",
    messagingSenderId: "949949117362",
    appId: "1:949949117362:web:e36e994273e0207394eaab",
    measurementId: "G-XBEHJ5MD4F"
  };

// Inicializa o app do Firebase
firebase.initializeApp(firebaseConfig);

function Start() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    const database = firebase.database();
    const gamesRef = database.ref();
    const query = gamesRef.orderByChild('name').equalTo(searchTerm);

    try {
      const snapshot = await query.once('value');
      const games = snapshot.val();
      const configurations = [];

      if (!games) {
        console.log("Jogo não encontrado.");
        setSearchResults([]);
        return;
      }

      Object.keys(games).forEach((gameKey) => {
        const game = games[gameKey];
        const configuration = {
          gameName: game.name,
          OS_min: game.OS_min,
          OS_rec: game.OS_rec,
          cpu_min: game.cpu_min,
          cpu_rec: game.cpu_rec,
          gpu_min: game.gpu_min,
          gpu_rec: game.gpu_rec,
          ram_min: game.ram_min,
          ram_rec: game.ram_rec
        };
        configurations.push(configuration);
        
      });

      setSearchResults(configurations);
    } catch (error) {
      console.error("Erro ao buscar configurações:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Selecione o seu <span>jogo:</span></h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Digite sua pesquisa"
      />
      <button onClick={handleSearch}>Pesquisar</button>
      
      {/* Exibir os resultados */}
      {searchResults.map((configuration, index) => (
        <div key={index}>
          <h2>{configuration.gameName}</h2>
          <p>OS mínimo: {configuration.OS_min}</p>
          <p>OS recomendado: {configuration.OS_rec}</p>
          <p>CPU mínimo: {configuration.cpu_min}</p>
          <p>CPU recomendada: {configuration.cpu_rec}</p>
          <p>GPU mínima: {configuration.gpu_min}</p>
          <p>GPU recomendada: {configuration.gpu_rec}</p>
          <p>RAM mínima: {configuration.ram_min}</p>
          <p>RAM recomendada: {configuration.ram_rec}</p>
        </div>
      ))}
    </div>
  );
}

export default Start;
