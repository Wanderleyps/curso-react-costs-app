import styles from './frase.module.css'

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente frase!</p>
        </div>
    )
}

export default Frase
