import React, { Component } from 'react';
import './landingPage.css';

const landingPage = () => {
    <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Skill-Loop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
            </ul>
            <span class="navbar-text">
                Home Page
            </span>
        </div>
    </nav>
    <br/>
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
                    <button type="submit" class="btn btn-primary">Log in</button>
                </div>
            </form>
        </div>
        <div class="col-md-1"></div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-4">
            <form class='signUp'>
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