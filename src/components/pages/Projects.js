import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


import Container from '../layout/Container'
import Loading from '../layout/Loading'

import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Message from '../layout/Message'

import styles from './Projects.module.css'

function Projects() {
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')

  const history = useNavigate()


  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch('https://deploytccpuc.vercel.app/projetos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
          }),
      100,
    )
  }, [])

 function removeProject(id) {
    fetch(`https://deploytccpuc.vercel.app/projetos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      //history('/projects', { message: 'Projeto removido com sucesso!' })
      
    })
    window.location.reload();
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.name_category}
              key={project.id}
              handleRemove={() => removeProject(project.id)}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  )
}

export default Projects
