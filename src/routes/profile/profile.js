import React, { Component } from 'react';
import {Button} from '../../components/Utils/Utils';
import AuthAPIService from '../../services/auth-api-service';
import ThingApiService from '../../services/thing-api-service';
import './profile.css';

export default class profile extends Component {
state ={
  user:{},
  workOut:[]
}
  componentDidMount() {
    AuthAPIService.getUser()
    .then(user =>{
      this.setState({user})
    })

    ThingApiService.getWorkOut()
    .then(workOut =>{
      this.setState({workOut})
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { day_id, time_id } = ev.target

    ThingApiService.postWorkOut( day_id.value, time_id.value)
      .then(() => {
        this.componentDidMount()
      })
      .catch(this.context.setError)
  }

  handleAlternate = ev => {
    ev.preventDefault()
    const { search } = ev.target
    this.props.history.push('/search/'+search.value)
  }

  getDay(day){
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]
    return days[day-1]  
  }

  getTime(time){
    const times = [
      'Morning',
      'Afternoon',
      'Night',
    ]
    return times[time-1]  
  }

  render() {
    return (
      <section className='usersProfile'>
        <div className='profileInfo'>
        <h4><strong>Full Name</strong>- {this.state.user.full_name}</h4>
        <h4><strong>Nickname</strong>- {this.state.user.nickname}</h4>
        <h4><strong>Email</strong>- {this.state.user.email}</h4>
        </div>
        <form
        className='DayTimeForm'
        onSubmit={this.handleSubmit}
        > 
        <div className='day_time'>
          <label htmlFor='day'>
            Chose Day 
          </label>
          <select
            className='list'
            name='day_id'
            required
            id='day_id'>
            <option
            value = '1'>Monday
            </option>
            <option
            value = '2'>Tuesday
            </option>
            <option
            value = '3'>Wednesday
            </option>
            <option
            value = '4'>Thursday
            </option>
            <option
            value = '5'>Friday
            </option>
            <option
            value = '6'>Saturday
            </option>
            <option
            value = '7'>Sunday
            </option>
          </select>
          <label htmlFor='time' className='list'>
            Chose Time 
          </label>
          <select
            className='list'
            name='time_id'
            required
            id='time_id'>
            <option
            value = '1'>Morning
            </option>
            <option
            value = '2'>Afternoon
            </option>
            <option
            value = '3'>Night
            </option>
          </select>
        </div>
        <Button type='submit' className='button'>
          Register
        </Button>
        </form>
        <div className='search'>
        <h4 className='color'><strong>Search for other users by day.</strong></h4>
          <form className='searchContainer' onSubmit={this.handleAlternate}>
            <select className='list' id='search' placeholder='day' required>
              <option value = '1'>
                Monday
              </option>
              <option value = '2'>
                Tuesday
              </option>
              <option value = '3'>
                Wednesday
              </option>
              <option value = '4'> 
                Thursday
              </option>
              <option value = '5'>
                Friday
              </option>
              <option value = '6'>
                Saturday
              </option>
              <option value = '7'>
                Sunday
              </option>
            </select>
            <input className='sButton' type='submit' value='Search'></input>
          </form>
        </div>
        <div className='workOutInfo'>
        <h4 className='color'><strong>List of your prefer work out day and times.</strong></h4>
        <ul>
          {this.state.workOut.map(w=>(<li key={w.id}>
            <p>{this.getDay(w.day_id)},
            {this.getTime(w.time_id)}</p>
            </li>))}
        </ul>
        </div>
        </section>
    )}
}
