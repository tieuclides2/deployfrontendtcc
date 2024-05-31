import React, { useState } from 'react';

import ButtonCadastro from './ButtonCadastro';
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {

       const [user, setUser] = useState({name: '', email: '', password: ''})


    const handleChange =(e) => {
        let nome = e.target.name;
        let value = e.target.value;
        setUser({...user, [nome]:value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

           
        fetch('https://deploytccpuc.vercel.app/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((resp) => resp.json())
        //   .then((data) => {
            alert('Login criado com sucesso!')
            

             window.location.href = '/login';
        //   })

        
    }

    return (
        <div className="cadastro-container">
            <div className="cadastro-box">
                <h2>Cadastro</h2>
                <form className="form-group" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Nome:</label>
                        <input  
                            type="text" 
                            name='name' 
                            id='name' 
                            placeholder='Digite seu nome'
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>E-mail:</label>
                        <input  
                            type="email" 
                            name='email' 
                            id='email' 
                            placeholder='Digite seu e-mail'
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Senha:</label>
                        <input 
                            type="password" 
                            name='password' 
                            id='password' 
                            placeholder='Digite sua senha'
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='btnForm'>
                        {/* <ButtonCadastro/> */}
                        <button type='submit'>cadastrar</button>
                             
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;

