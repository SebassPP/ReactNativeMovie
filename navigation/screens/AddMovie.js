import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './AddMovieStyle';

export default function AddMovie(navigation) {
    const [nombrePelicula, setNombrePelicula] = useState('');
    const [anoPelicula, setanoPelicula] = useState('');
    const [generoPelicula, setgeneroPelicula] = useState('');
    const [calificacionPelicula, setcalificacionPelicula] = useState('');

    const handleSubmit = () => {
        console.log('Nombre de la película:', nombrePelicula);
        console.log('Fecha de estreno:', anoPelicula);
        console.log('Genero:', generoPelicula);
        console.log('Calificacion:', calificacionPelicula);
      };

    return (
        <View style={styles.container}>
        <Text style={styles.titulo}>Película Nueva</Text>
        <Text style={styles.introduccion}>
          Ingresa el nombre de la película que deseas agregar:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la película"
          value={nombrePelicula}
          onChangeText={text => setNombrePelicula(text)}
        />
         <Text style={styles.introduccion}>
          Fecha de estreno:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={anoPelicula}
          onChangeText={text => setanoPelicula(text)}
        />
        <Text style={styles.introduccion}>
          Genero:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Genero"
          value={generoPelicula}
          onChangeText={text => setgeneroPelicula(text)}
        />
        <Text style={styles.introduccion}>
          Calificacion de la pelicula:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Calificacion"
          value={calificacionPelicula}
          onChangeText={text => setcalificacionPelicula(text)}
        />
        <Button 
        
        title="Agregar" onPress={() => alert("Pelicula Agregda")} />
      </View>
        
    );
}
