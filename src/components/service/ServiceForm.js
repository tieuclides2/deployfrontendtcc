import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'
import { useParams } from 'react-router-dom';

function ServiceForm({ handleSubmit, btnText, projectData }) {
  let { codigo } = useParams();
  const [service, setService] = useState({idproject:codigo});

  const submit = (e) => {
    e.preventDefault()
    createService(service)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
    console.log(service)
  }

  function createService(service) {
    console.log(service)
    // initialize cost and services
    
    fetch('https://deploytccpuc.vercel.app/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //history('/projects', { message: 'Projeto criado com sucesso!' })
        
      })
       window.location.reload();
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do projeto"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ServiceForm
