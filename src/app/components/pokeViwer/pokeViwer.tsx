"use client"
import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './styles.module.scss';

const PokemonViewer = () => {
  const [spriteUrl, setSpriteUrl] = useState("/");
  const [seconds, setSeconds] = useState(0);

  // Se actualiza la imagen cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      getRandomSprite(setSpriteUrl);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [spriteUrl]);


  useEffect(() => {
    // Función para obtener una imagen aleatoria de la PokeAPI
    getRandomSprite(setSpriteUrl);

    // Se actualiza el cronómetro cada 1 segundo
    const intervalId = setInterval(() => {
      updatedSeconds(setSeconds);
    }, 995);

    // Se detiene el cronómetro al salir del componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.pokemon_container}>
      <Image src={spriteUrl} alt="Pokemon sprite" width={250} height={250} />
      <h2>{new Date(seconds * 1000).toISOString().slice(11, 19)}</h2>
    </div>
  );
};

const getRandomSprite = (setSpriteUrl: any) => {
    const randomNumber = Math.floor(Math.random() * 1008);
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`;
    setSpriteUrl(spriteUrl);
};

const updatedSeconds = (setSeconds: any) => {
  setSeconds((seconds: number) => seconds + 1);
}

export default PokemonViewer;