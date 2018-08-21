import React, { Component } from 'react';
import './landingPage.css';

class landingPage extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    signInClick = (props) => {
        props.preventDefault();
    }
    signUpClick = (props) => {
        props.preventDefault();
        const newName = this.state.name;
        const newEmail = this.state.email;
        const newPassword = this.state.password;
    }
    landingPage = (page) => {
        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <p class="navbar-brand">Skill-Loop</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={this.signUpClick}></button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <p class="nav-link" >Home
                            <span class="sr-only">(current)</span>
                            </p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link">Features</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" >Pricing</p>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Home Page
                </span>
                </div>
            </nav>
            <br />
            <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-5">
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Email"></input>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Password"></input>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={this.signInClick}>Log in</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-1"></div>
            </div>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <form class='signUp'>
                        <div class="form-group">
                            <label for="exampleInput">Name</label>
                            <input type="input" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign up</button>
                    </form>
                </div>
                <div class="col-md-7">
                    {/* Add animated stuff here */}
                </div>
            </div>
        </body>
    }
}
export default landingPage;