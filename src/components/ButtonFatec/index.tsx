import styles from  './ButtonFatec.module.css'

interface Props{
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props){
    return(
    <button className={styles.botaofatec} type={type}>{label}</button>
    )
}
export default ButtonFatec