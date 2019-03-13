import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const AboutMe = () => <h2>About Me</h2>
const Projects = () => <h2>Projects</h2>
const Contact = () => <h2>Contact</h2>

const Landing = () => <h2>Landing (Welcome to my homepage!)</h2>

const App = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component ={Landing} />
                    <Route exact path="/bio" component ={AboutMe} />
                    <Route path ="/projects" component ={Projects} />
                    <Route path ="/contact" component ={Contact} />

                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;