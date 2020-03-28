import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function Login(e) {
        e.preventDefault();

        try {
            const check = await api.post('sessions', { id } );
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', check.data.name);
            history.push('/profile');

        }
        catch {
            alert('A ID informada não foi encontrada.');

        }

    }


    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="logo"/>

                <form onSubmit={Login}>
                    <h1>Faça seu logon</h1>

                    <input
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} />
                        Não tenho cadastro
                    </Link>
                        
                </form>
            </section>

            <img src={HeroesImg} alt="heroes"/>
        </div>

    );
}