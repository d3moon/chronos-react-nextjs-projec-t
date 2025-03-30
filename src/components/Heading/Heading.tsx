import styles from './Heading.module.css' // Importando o css module e atribuindo o conj. de classes à uma variavel

// Definindo os tipos das props que vou usar
interface DataProps {
  attr1: string,
  attr2: string,
  children: string
}

// Aplicando os tipos nas props que declarei
const Heading = (props: DataProps) => {
  return (
    <div>
      <h1 className={styles.heading}>{props.children}</h1> {/* Usando props nos elementos*/}
    </div>
  )
}

export default Heading
