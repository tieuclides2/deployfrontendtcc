import { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


import styles from './ProjectForm.module.css'
import NewCatButton from '../form/NewCatButton'


function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {})
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://deploytccpuc.vercel.app/categorias', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
    window.location.href = '/projects'
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget}
      />
      <Select
        name="idcategory"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleChange}
        value={project.idcategory ? project.idcategory : ''}
      />

      <SubmitButton text={btnText} />
      <NewCatButton/>
    </form>
    
  )
  
}

export default ProjectForm
