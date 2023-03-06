'use client'
import Link from 'next/link';
import styles from './navbutton.module.scss';
import { usePathname } from 'next/navigation';

export default function NavButton({route, text} : any){
    const path = usePathname();
    return (
        <Link legacyBehavior href={route}>
            <a className={styles.nav_button}>
                <p className={path === route ? styles.selected: ''}>{text}</p>
            </a>
        </Link>
    )
}