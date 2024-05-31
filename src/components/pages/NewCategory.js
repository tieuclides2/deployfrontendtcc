import React from 'react'
import styles from './NewCategory.module.css'

import{useState} from 'react'

const NewCategory = () => {

    const [name, setName] = useState('')


  const handleSubmit = (e) => {
     e.preventDefault();

        
     fetch('https://deploytccpuc.vercel.app/newcategory', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({name:name}),
     })
       .then((resp) => resp.json())
     //   .then((data) => {
         alert('categoria criado com sucesso!')
         

         // window.location.href = '/login';
     //   })

     
 }

  return (
    <div className={styles.formCat}>
      <h1>Criar nova categoria:</h1>
      <form onSubmit={handleSubmit}>
      <label className={styles.labelform}>
        Nova Categoria: 
        <input type="text" value={name} placeholder='Nome da categoria' onChange={(e)=> setName(e.target.value)}/>
        <button type='submit'>Adicionar</button> 
        
      </label>
      </form>
    </div>
  )
}

export default NewCategory 
