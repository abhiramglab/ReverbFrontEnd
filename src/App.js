import React from 'react'
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Title from './Components/Title/Title'
import CardList from './Components/CardList/CardList'
import SpeechRecognition from './Components/SpeechRecognition/SpeechRecognition'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'

import './App.css'
import 'tachyons'

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
}

class App extends React.Component {
    constructor() {
    super()
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        text: [],
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      text: data.text,
      joined: data.joined
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render(){
    return (
      <div className="App">
      <Particles className='particles'
         params={particlesOptions}
      />
        <Navigation 
        onRouteChange={this.onRouteChange} 
        isSignedIn={this.state.isSignedIn} 
        />
        { this.state.route === 'home' ?
        <div>
                      <Logo />
                      <Title name={this.state.user.name} />
                      <CardList id={this.state.user.id}/>
                      <SpeechRecognition id={this.state.user.id} />
                    </div>
                    : (
                      this.state.route === 'signin' ? 
                      <Signin 
                      loadUser={this.loadUser} 
                      onRouteChange={this.onRouteChange} />
                      : <Register 
                      onRouteChange={this.onRouteChange} 
                      loadUser={this.loadUser}/>)
         }
      </div>
    )
  }
}

export default App;
