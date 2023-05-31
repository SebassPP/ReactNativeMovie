import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Formulario from './Formulario';
import React from 'react';
import { render, getByText, getByPlaceholderText } from '@testing-library/react-native';
import Formulario from './Formulario';

describe('Formulario', () => {
  test('El componente se renderiza correctamente y los elementos de interfaz de usuario están presentes', () => {
    const { getByText, getByPlaceholderText } = render(<Formulario />);
    
    const titulo = getByText('Película Nueva');
    const nombrePeliculaInput = getByPlaceholderText('Nombre de la película');
    const anoPeliculaInput = getByPlaceholderText('DD/MM/AAAA');
    const generoPeliculaInput = getByPlaceholderText('Genero');
    const calificacionPeliculaInput = getByPlaceholderText('Calificacion');
    const agregarButton = getByText('Agregar');
    
    expect(titulo).toBeDefined();
    expect(nombrePeliculaInput).toBeDefined();
    expect(anoPeliculaInput).toBeDefined();
    expect(generoPeliculaInput).toBeDefined();
    expect(calificacionPeliculaInput).toBeDefined();
    expect(agregarButton).toBeDefined();
  });
});



describe('Formulario', () => {
  test('La función handleSubmit se llama correctamente al presionar el botón "Agregar"', () => {
    const { getByText, getByPlaceholderText } = render(<Formulario />);
    
    const nombrePeliculaInput = getByPlaceholderText('Nombre de la película');
    const anoPeliculaInput = getByPlaceholderText('DD/MM/AAAA');
    const generoPeliculaInput = getByPlaceholderText('Genero');
    const calificacionPeliculaInput = getByPlaceholderText('Calificacion');
    const agregarButton = getByText('Agregar');
    
    const consoleLogSpy = jest.spyOn(console, 'log');
    
    fireEvent.changeText(nombrePeliculaInput, 'Mi película');
    fireEvent.changeText(anoPeliculaInput, '2022');
    fireEvent.changeText(generoPeliculaInput, 'Acción');
    fireEvent.changeText(calificacionPeliculaInput, '8');
    fireEvent.press(agregarButton);
    
    expect(consoleLogSpy).toHaveBeenCalledWith('Nombre de la película:', 'Mi película');
    expect(consoleLogSpy).toHaveBeenCalledWith('Fecha de estreno:', '2022');
    expect(consoleLogSpy).toHaveBeenCalledWith('Genero:', 'Acción');
    expect(consoleLogSpy).toHaveBeenCalledWith('Calificacion:', '8');
    
    consoleLogSpy.mockRestore();
  });
});