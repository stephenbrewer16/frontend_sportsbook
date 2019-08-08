import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import  WelcomeContainer  from './containers/WelcomeContainer';
import  MainContainer  from './containers/MainContainer';
import  SignupForm  from './components/SignupForm';
import  LoginForm  from './components/LoginForm';
import Nav from './containers/Nav'

export default class App extends Component {
  state = {
    currentUser: null,
    wagers: [],
    matchups:[],
    sports: ["MLB", "NFL", "NHL", "NBA"]
  }

  componentDidMount = () => {
    const token = localStorage.token
    if (token) {
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
        .then(res => res.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors)
          } else {
            this.setState({
              currentUser: response
            })
          }
        })
    }
  }



  setUser = (response) => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/home")
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/welcome")
    })
    console.log(this.state.currentUser)
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path='/signup' render={(routerProps) => <SignupForm setUser={this.setUser}{...routerProps} />} />
          <Route path='/login' render={(routerProps) => <LoginForm setUser={this.setUser}{...routerProps} />} />
          <Route path='/welcome' render={(routerProps) => <WelcomeContainer setUser= {this.setUser} currentUser={this.state.currentUser}{...routerProps}/>}/>
          {this.state.currentUser
          ?
          <div>
            <Nav logout={this.logout} currentUser={this.state.currentUser}/>
            <Route path='/home' render={(routerProps) => <MainContainer sports={this.state.sports} setUser={this.setUser}  currentUser={this.state.currentUser}{...routerProps} />} />
          </div>
          :
          null
        }
        </Switch>
      </div>
    )
  }
}

