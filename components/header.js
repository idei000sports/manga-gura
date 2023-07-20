import styles   from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header(){
    return (
        <>
			<h1 className={styles.site_title}><Link href="/">漫画蔵</Link></h1>
			<p className={styles.explanation}>漫画</p>
                        
        </>

    )

}