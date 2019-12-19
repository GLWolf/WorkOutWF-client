import TokenService from '../services/token-service'
import config from '../config'


const ThingApiService = {
  getThings() {
    return fetch(`${config.API_ENDPOINT}/things`, {
        headers: {},
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
  },
  getThing(thingId) {
    return fetch(`${config.API_ENDPOINT}/things/${thingId}`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
  },
  getThingReviews(thingId) {
    return fetch(`${config.API_ENDPOINT}/things/${thingId}/reviews`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
  },
  postWorkOut(day_id, time_id) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({
          day_id,
          time_id,
        }),
      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
  },
  getWorkOut() {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
            method: 'GET',
            headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok) ?
            res.json().then(e => Promise.reject(e)) :
            res.json()
        )
},
searchWorkOut(day_id) {
  return fetch (`${config.API_ENDPOINT}/reviews/search/${day_id}`, {
    method: 'GET',
    headers: {
      'authorization': `bearer ${TokenService.getAuthToken()}`,
    },
  })
  .then(res =>
    (!res.ok) ?
    res.json().then(e => Promise.reject(e)) :
    res.json()
    )
}
// getThing(thingId) {
//   return fetch(`${config.API_ENDPOINT}/things/${thingId}`, {
//       headers: {
//         'authorization': `bearer ${TokenService.getAuthToken()}`,
//       },
//     })
//     .then(res =>
//       (!res.ok) ?
//       res.json().then(e => Promise.reject(e)) :
//       res.json()
//     )
// },
}


export default ThingApiService;