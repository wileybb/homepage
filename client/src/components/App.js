import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Projects from './Projects'
import Contact from './Contact'
import Bio from './Bio'
const Dashboard = () => <h2>Dashboard</h2>

const Landing = () => <h2>Landing (Welcome to my homepage!)</h2>

const App = () => {
    return(
    
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component ={Landing} />
                    <Route exact path="/bio" component ={Bio} />
                    <Route path ="/projects" component ={Projects} />
                    <Route path ="/contact" component ={Contact} />

                </div>
            </BrowserRouter>
     
    );
}

export default App;