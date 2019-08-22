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
import Tutorial from './components/Tutorial';

export default class App extends Component {
  state = {
    currentUser: null,
    wagers: [],
    matchups:[],
    currentMatchupId: null,
    wallet: '',
    mlb: false,
    nfl: false,
    nba: false,
    nhl: false
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
              wallet: this.state.currentUser.wallet,
              mlb: false,
              nfl: false,
              nba: false,
              nhl: false
            })
          }
        })
    }

    fetch("http://localhost:3000/matchups")
    .then(resp => resp.json())
    .then(matchup => this.setState({
      matchups: matchup
    }))
  }



  setUser = (response) => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/home")
    })
  }
  logoReset = () => {
    this.setState({
      mlb: false,
      nfl: false,
      nba: false,
      nhl: false
    })
  }

  logout = () => {
    this.setState({
      currentUser: null,
      mlb: false,
      nfl: false,
      nba: false,
      nhl: false
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/welcome")
    })
    console.log(this.state.currentUser)
  }

  
  addWager = (newWager) => {
    this.setState({
      wagers: [newWager, ...this.state.wagers]
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
    }, () => {
      this.props.history.push("/home")
    })
  }
  subtractFunds = (user) => {
    this.setState({
      wallet: user.wallet,
      currentUser: user
    }, () => {
      this.props.history.push("/home")
    })
  }
  baseballClick = () => {
    this.setState({
      mlb: !this.state.mlb
    })
  }
  footballClick = () => {
    this.setState({
      nfl: !this.state.nfl
    })
  }
  basketballClick = () => {
    this.setState({
      nba: !this.state.nba
    })
  }
  hockeyClick = () => {
    this.setState({
      nhl: !this.state.nhl
    })
  }
  
  render() {
    console.log(this.state.currentUser)
    return (
      <div>
        <Switch>
          {this.state.currentUser
          ?
          <div>
            <Nav history={this.props.history} logoReset={this.logoReset} mlb={this.state.mlb} nfl={this.state.nfl} nba={this.state.nba} nhl={this.state.nhl} wallet={this.state.wallet} logout={this.logout} currentUser={this.state.currentUser}/>
            <Route path='/tutorial' render={(routerProps) => <Tutorial matchups={this.state.matchups} {...routerProps}/>}/>
            <Route path='/addfunds'  render={(routerProps) => <AddFunds addFunds={this.addFunds} currentUser={this.state.currentUser}{...routerProps}/>}/>
            <Route path='/wallet' render={(routerProps) => <Wallet wallet={this.state.wallet} {...routerProps} currentUser={this.state.currentUser}/>}/>
            <Route path='/profile' render={(routerProps)=> <Profile addFunds={this.addFunds} {...routerProps} matchups={this.state.matchups} wallet={this.state.wallet} currentUser={this.state.currentUser}/>}/>
            <Route path='/wagerform' render={(routerProps) => <WagerForm subtractFunds={this.subtractFunds} wallet={this.state.wallet} currentMatchupId={this.state.currentMatchupId} addWager={this.addWager} currentUser={this.state.currentUser} matchups={this.state.matchups} setUser={this.setUser}{...routerProps} />} />
            <Route path='/home' render={(routerProps) => <MainContainer mlb={this.state.mlb} nfl={this.state.nfl} nba={this.state.nba} nhl={this.state.nhl} baseballClick={this.baseballClick} footballClick={this.footballClick} basketballClick={this.basketballClick} hockeyClick={this.hockeyClick} wallet={this.state.wallet} selectMatchup={this.selectMatchup} matchups={this.state.matchups}setUser={this.setUser}  currentUser={this.state.currentUser}{...routerProps} />} />
          </div>
          :
          <div>
            <Route path='/signup' render={(routerProps) => <SignupForm setUser={this.setUser}{...routerProps} />} />
            <Route path='/login' render={(routerProps) => <LoginForm setUser={this.setUser}{...routerProps} />} />
            <Route path='/welcome' render={(routerProps) => <WelcomeContainer setUser= {this.setUser} currentUser={this.state.currentUser}{...routerProps}/>}/>
          </div>
        }
        </Switch>
      </div>
    )
  }
}

