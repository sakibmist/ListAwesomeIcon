import React, { Component } from 'react';
//import logo from './logo.svg';
import {NavLink,Route} from 'react-router-dom';
import './App.css';
import addItemPage from './AddItemPage';

class App extends Component {
  render() {
    return (
      <div className="offset-1 col-sm-10 minHeight">
        <div className="container">
          <div className="card border">
            <div className="card-header border">
              <h1 className="text-center"> Simple Header </h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-blue">
              <NavLink className="nav-link" to="/app">Brand</NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active navSpace">
                    <NavLink className="nav-link" to="/app">Home</NavLink>

                  </li>
                  <li className="nav-item navSpace">
                    <NavLink className="nav-link" to="/addItemPage">Add Item</NavLink>
                  </li>
                  <li className="nav-item dropdown navSpace">
                    <a
                      className="nav-link dropdown-toggle"
                      href="sd"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="d">
                        Action
                  </a>
                      <a className="dropdown-item" href="d">
                        Another action
                  </a>
                      <div className="dropdown-divider" />
                       
                    </div>
                  </li>
                  <li className="nav-item navSpace">
                  <NavLink to="/peoples" className="nav-link">Show-All</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="minHeight">
            <Route path="/addItemPage" component={addItemPage} />
            {/* <Route path="/peoples" component={PersonIndexPage} />   
            <Route path="/person/edit/:id" component={EditPersonPage} />  
            <Route path="/person/detail/:id" component={DetailsPage}/> */}
            </div>
           
            <div className="card-footer border">
              <h6 className="text-center">
                All rights are reserved by the authority.
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
