import React, { Component } from 'react'

class DogCatcher extends Component {
  constructor() {
    super()
    this.state = {
      caughtDog: '',
    }
  }

  fetchDog() {
    fetch(`https://dog.ceo/api/breeds/image/random`, {
      method: 'GET'
    }).then(res => res.json())
    .then(res => {
      this.setState({
        caughtDog: res.message,
      })
    })
    .catch((err) => console.log(err));
    this.timer = setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.fetchDog()}>Catch a new dog!</button>
          <img  src={this.state.caughtDog} alt="random dog pic hasn't been caught"/>
      </div>
    )
  }
}

export default DogCatcher;