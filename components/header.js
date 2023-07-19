import styles   from '../styles/Header.module.css'

export default function Header(){
    return (
        <>
			<h1 className={styles.site_title}><a href="/">漫画蔵</a></h1>
			<p className={styles.explanation}>漫画</p>
                        
        </>

    )

}