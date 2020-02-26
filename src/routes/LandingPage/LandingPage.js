import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import './LandingPage.css'

export default class LandingPage extends Component {

  render() {
    return (
      <Section className='intro'>
        <div className='body'>
          <h2 className='Landing'>
          Hello, Welcome to Work Out With Friends. This app will help you search for people that have a similar workout schedule. 
          This app is in its Alpha stage, many features have not been added yet. 
          </h2>
        </div>
      </Section>
      )
  }
}