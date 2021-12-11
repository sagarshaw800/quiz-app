import React from 'react'
import Nav, { Heading } from './Navbar.style'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    let navigate = useNavigate()

    const moveToHome = () =>{
        navigate(`/`)
    }

    return (
        <Nav>
            <Heading onClick={moveToHome}>Quiz-App</Heading>
        </Nav>
    )
}

export default Navbar
