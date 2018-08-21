import React, { Component } from 'react';
import "./userPage.css";

state = {
    link1: 'data:image/jpeg;base64,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',
    link2: 'data:image/jpeg;base64,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',
    link3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYm20EhRGZQvy27EP4X_0XFF1nBgTj0kSQoDfVNZ-Io-viASAyKQ'
}

const userPage = () => {
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Skill Loop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    Profile Page
                </span>
            </div>
        </nav>
        <br> </br>
        <div class="row">
            <div class="col-md-4">
                <center>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src={this.state.link1} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </center>
            </div>
            <div class="col-md-4">
                <center>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src={this.state.link2} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </center>
            </div>
            <div class="col-md-4">
                <center>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src={this.state.link3} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </center>
            </div>
        </div>
    </div>
}
export default userPage;