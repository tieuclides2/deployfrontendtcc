import styles from './SubmitButton.module.css'
import { useNavigate } from 'react-router-dom';

function SubmitButton({ text, props }) {

  const history = useNavigate();

  const handleProj = () => {
    history('/projects') // ir para pagina de projetos apos clicar em criar projeto
  }

  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton
