import React from 'react'
import styles from './navbar.module.scss';
import NavButton from '@components/Atoms/navButton';

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <ul>
        <NavButton text="Home" route="/"/>
        <NavButton text="Reto 2" route="/reto2"/>
      </ul>
    </nav>
  )
}