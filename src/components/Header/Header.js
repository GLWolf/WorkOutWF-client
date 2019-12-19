import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    // DO SOMETHING
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <section className='Header__logged-in'>
      <div>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <Link
          to='/profile'>
          Profile
        </Link>
        </div>
      </section>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            <FontAwesomeIcon className='blue' icon='dumbbell' />
            {' '}
          WorkOutWF
          </Link>
        </h1>
        <span className='Header__tagline--wide'>Look for your gym friend.</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

      <span className='Header__tagline--narrow'>Look for your gym friend.</span> 
    </>
  }
}
