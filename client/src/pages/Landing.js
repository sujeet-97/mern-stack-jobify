import {Logo} from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link, Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import React from 'react'

const Landing = () => {
    const {user} = useAppContext()
  return (
    <React.Fragment>
        {user && <Navigate to='/' />}
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            <div className='info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>I'm baby cornhole vape sus, retro kogi pok pok direct trade tumblr. Pop-up knausgaard whatever kale chips vibecession. Gentrify fam synth pok pok af, roof party stumptown tbh pinterest brunch keffiyeh flannel.</p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>
    </React.Fragment>
  )
}


export default Landing
