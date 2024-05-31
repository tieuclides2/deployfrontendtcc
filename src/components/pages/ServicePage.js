import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../layout/Container'
import ServiceCard from '../service/ServiceCard'

function ServicePage(props) {
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [services, setServices] = useState([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')
  const { codigo } = useParams();

  useEffect(() => {
    // project.cost = newCost;

    fetch(`https://deploytccpuc.vercel.app/services/${props.id}`, {//add services in page
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setServices(data)
        // setShowServiceForm(!showServiceform)
        setMessage('Serviço adicionado!')
        setType('success')
      })
  }, [])

const removeService = () => {
  fetch(`https://deploytccpuc.vercel.app/services/${props.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    //history('/projects', { message: 'servico removido com sucesso!' })
    
  })
  window.location.reload();
}

  return (
    <div>
      <h2>Serviços:</h2>
      <Container customClass="start">
        {listaLenght(services) > 0 ?
          services.map((service) => (
            service ? <ServiceCard
              id={service.id}
              name={service.name}
              cost={service.cost}
              description={service.description}
              key={service.id}
              handleRemove={removeService}
            /> : ''
          )) : ''}
        {listaLenght(services) === 0 && <p>Não há serviços cadastrados.</p>}
      </Container>
    </div>
  )
  function listaLenght(lista) {
    try {
      return lista.length
    } catch {
      return 0;

    }
  }
}

export default ServicePage
