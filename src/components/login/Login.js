import React from 'react'
import '../login/Login.module.css'

import logo from '../../img/costs_logo.png'

import { useState } from 'react'
import ButtonLogin from './ButtonLogin'
import ButtonCadastro from './ButtonCadastro'


const Login = () => {
    const [user, setUser] = useState({ usuario: '', password: '' })

    const handleChange = (e) => {
        let nome = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [nome]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        fetch(`https://deploytccpuc.vercel.app/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((resp) => resp.json())
        // .then((data) => {
        try {
            window.location.href = '/home';
        } catch (error) {
            alert('Usuario não encontrado!')

        }
        // })

    }

    return (
        <div className="login-container">
            <div className="login-box">
                {/*<img src={logo} alt='logo' />*/}
                <h2>Login</h2>
                <form className="form-group" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>
                            Usuario:
                            <input
                                type="text"
                                name='usuario'
                                id='usuario'
                                placeholder='Digite seu usuário'
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div className="input-group">
                        <label>
                            Senha:
                            <input
                                type="password"
                                name='password'
                                id='password'
                                placeholder='Digite sua senha'
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div className='btnForm1'>
                        <ButtonLogin />
                        <ButtonCadastro />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
