import Image from 'next/image'
import { Inter } from 'next/font/google'
import PokemonViewer from '@/app/components/pokeViwer/pokeViwer';
import styles from './styles.module.scss';

export default function Page2() {
  return (
    <div className={styles.container}>
      <h1>Reto 2</h1>
      <PokemonViewer />
    </div>
  )
}