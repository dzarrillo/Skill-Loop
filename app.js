import React, { Component } from 'react';
import "./src/components/landingPage";
import "./src/components/signUp";
import "./src/components/userPage";

class app extends Component{
    state = {
        name:'',
        location:'',
        description:'',
        skillsNeeded:[]
    }
    render(){
        return(
            <div>
                <Title>A befitting final project</Title>
            </div>
        );
    }
}