import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import  WelcomeContainer  from './containers/WelcomeContainer';
import  MainContainer  from './containers/MainContainer';
import  SignupForm  from './components/SignupForm';
import  LoginForm  from './components/LoginForm';
import Nav from './containers/Nav'
import WagerForm from './components/WagerForm'

export default class App extends Component {
  state = {
    currentUser: null,
    wagers: [],
    matchups:[],
    currentMatchupId: null
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
    fetch("http://localhost:3000/matchups")
    .then(resp => resp.json())
    .then(baseball => this.setState({
      matchups: baseball
    }))
    // fetch("https://cors-anywhere.herokuapp.com/https://api.sportradar.us/mlb/trial/v6.5/en/games/2019/08/9/schedule.json?api_key=3yezgnsnryvgvepu2m9pbgvb")
    //   .then(resp => resp.json())
    //   .then(baseball => this.setState({
    //     matchups: baseball.games
    //   }))
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

  addWager = (newWager) => {
    this.setState({
      wagers: [newWager, ...this.state.wagers]
    }, () => {
      this.props.history.push("/home")
    })
  }
  selectMatchup = (matchup) =>{
    this.setState({
      currentMatchupId: matchup
    })
  }
  render() {
    console.log(this.state.matchups)
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
            <Route path='/wagerform' render={(routerProps) => <WagerForm currentMatchupId={this.state.currentMatchupId} addWager={this.addWager} currentUser={this.state.currentUser} matchups={this.state.matchups} setUser={this.setUser}{...routerProps} />} />
            <Route path='/home' render={(routerProps) => <MainContainer selectMatchup={this.selectMatchup} matchups={this.state.matchups}setUser={this.setUser}  currentUser={this.state.currentUser}{...routerProps} />} />
          </div>
          :
          null
        }
        </Switch>
      </div>
    )
  }
}

