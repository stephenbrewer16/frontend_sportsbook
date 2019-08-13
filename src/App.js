import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import  WelcomeContainer  from './containers/WelcomeContainer';
import  MainContainer  from './containers/MainContainer';
import  SignupForm  from './components/SignupForm';
import  LoginForm  from './components/LoginForm';
import Nav from './containers/Nav'
import WagerForm from './components/WagerForm'
import Wallet from './components/Wallet';
import Profile from './components/Profile';
import AddFunds from './components/AddFunds';

export default class App extends Component {
  state = {
    currentUser: null,
    wagers: [],
    matchups:[],
    currentMatchupId: null,
    wallet: ''
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
              currentUser: response,
            })
            this.setState({
              wallet: this.state.currentUser.wallet
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
  selectMatchup = (matchup) => {
    this.setState({
      currentMatchupId: matchup
    })
  }
  addFunds = (user) => {
    console.log("user", user)
    this.setState({
      wallet: parseFloat(user.wallet),
      currentUser: user
    })
  }
  subtractFunds = (user) => {
    this.setState({
      wallet: user.wallet,
      currentUser: user
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
            <Nav wallet={this.state.wallet} logout={this.logout} currentUser={this.state.currentUser}/>
            <Route path='/addfunds' render={(routerProps) => <AddFunds addFunds={this.addFunds} currentUser={this.state.currentUser}{...routerProps}/>}/>
            <Route path='/wallet' render={(routerProps) => <Wallet wallet={this.state.wallet} {...routerProps} currentUser={this.state.currentUser}/>}/>
            <Route path='/users/:id' render={(routerProps)=> <Profile {...routerProps} currentUser={this.state.currentUser}/>}/>
            <Route path='/wagerform' render={(routerProps) => <WagerForm subtractFunds={this.subtractFunds} wallet={this.state.wallet} currentMatchupId={this.state.currentMatchupId} addWager={this.addWager} currentUser={this.state.currentUser} matchups={this.state.matchups} setUser={this.setUser}{...routerProps} />} />
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

