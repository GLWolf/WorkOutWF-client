import React, { Component } from 'react';
import ThingApiService from '../../services/thing-api-service';
// import AuthApiService from '../../services/auth-api-service';


export default class Search extends Component {

  state ={
    days:[]
  }

    componentDidMount() {
      const {dayId} = this.props.match.params
      
        ThingApiService.searchWorkOut(dayId)
        .then(days =>{
          this.setState({days});
        });
        // AuthApiService.getUser()
        // .then(user =>{
        //   this.setState({user});
        // });
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
      
        return(
          <div className='results'>
          <ul>
          {this.state.days.map(w=>(<li key={w.id}>
            <p>{w.full_name}-{w.nickname}-{w.email},{this.getDay(w.day_id)},
            {this.getTime(w.time_id)}</p>
            </li>))}
        </ul>
          </div>
        )}
}
