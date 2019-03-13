import React, { Component } from 'react';
// import '../css/reset.css';
// import '../css/style.css';

class Projects extends Component {
    render() {
        return (
                <div>
  
            
                    <div className="container">
                        <div className="row title">
                            <div className="col-md-8"><h2>Projects</h2></div> 
                        </div>
                        <hr/>
                            <div className="row">
                                    <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://wileybb.github.io/TriviaGame/">"Trivia Game"</a></h3></div>
            
                            <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://wileybb.github.io/Train-Scheduler/">"Train Scheduler"</a></h3></div>
                        </div>
                        
            
            
                        <div className="row">
                            <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://wileybb.github.io/GifTastic/">"GifTastic"</a></h3></div>
                            <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://wileybb.github.io/psychic-game/">"Psychic Game"</a></h3></div>
                        </div>
                        
            
            
                        <div className="row">
                            <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://github.com/wileybb/liri-node-app">"LIRI" node app</a></h3></div>
                            <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://github.com/wileybb/word-guess-cli">"WordGuess" CLI app</a></h3></div>
                        </div>
            
            
                        <div className="row">
                            <div className="col-md-4 portfolio-item"><img src="/images/200.png"/><h3><a href="https://github.com/wileybb/bamazon">"Bamazon" node sql app</a></h3></div>
                            <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://github.com/wileybb/liri-node-app">"Burgers" node express handlebars app</a></h3></div>
            
                        </div>
            
                        <div className="row">
                            <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://github.com/wileybb/friend-finder">"Friend Finder" app</a></h3></div>
                            <div className="col-md-4 portfolio-item"><img src="./css/images/200.png"/><h3><a href="https://damp-headland-74421.herokuapp.com">"Democratreats" node sequelize app</a></h3></div>
            
                        </div>
            
                    </div>
            
                    
               <div className="container-fluid footer navbar-fixed-bottom">
                    <div className="row">
                        <div className="col-lg-12"><br/>Copyright<br/></div>
                    </div>
                </div>

                </div>
              
            

        );
    }
}

export default Projects;