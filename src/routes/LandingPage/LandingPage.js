import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import './LandingPage.css'

export default class LandingPage extends Component {

  render() {
    return (
      <Section className='intro'>
        <div className='body'>
          <h2 className='Landing'>
          WorkOutWF is an app that help to connect with others
          with a similar workout schedule. You can create a 
          profile add in a day and general time that you are 
          available to work out. After you can search by day 
          and available times and find other users with that 
          availability. 
          </h2>
        </div>
      </Section>
      )
  }
}