import React from 'react'
import Logo from '../../assets/img/marcolaFlix.png'
import './menu.css'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/" >
                <img src={ Logo } alt="marcolaFlix Logo" className="Logo"/>
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo video

            </Button>

        </nav>
    );
}

export default Menu