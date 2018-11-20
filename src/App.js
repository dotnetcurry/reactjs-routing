import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Repos } from './Repos';
import { Members } from './Members';
import { MemberDetails } from './MemberDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Explore the Facebook org on GitHub</h1>
        </header>
        <section className="content">
          <div className="container row">
            <div className="col-md-3">
              <nav className="navbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to='/'>Repos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/members'>Members</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path="/" exact component={Repos} />
                <Route path="/members" component={Members} />
                <Route path="/member/:login" component={MemberDetails} />
              </Switch>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
