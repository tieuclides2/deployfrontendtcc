import React from 'react'
import styles from './ButtonCadastro.module.css'

import { useNavigate } from 'react-router-dom'

const ButtonCadastro = () => {
  const history = useNavigate();

  const handleCadastro = () => {
    history('/cadastro')
  }


  return (
    <div className={styles.btnCad}>
        <button type='submit'onClick={handleCadastro}>Criar Conta</button>
    </div>
  )
}

export default ButtonCadastro
