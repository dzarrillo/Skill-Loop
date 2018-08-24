import React, { Component } from 'react';
import './landingPage.css';

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
//WHen reconfiguring the button functionality, you can delete this function as it only is used to pause and rerun.
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

class landingPage extends Component {
    state = {
        //Not to sure if this source will work, because I know you cannot add the source directly in JSX
        videoSource = '../../videos/Love Coding (Background video for website).mp4'
    }
    landingPage = (props) => {
        <div>
            <video autoplay muted loop id="myVideo">
                <source src={this.state.videoSource} type="video/mp4">Your browser does not support HTML5 video.</source>
            </video>
            <div class="content">
                <h1>Skill-Loop</h1>
                <p>By developers for developers</p>
                <button id="myBtn" onclick="myFunction()">Pause</button>
            </div>
        </div>
    }
}