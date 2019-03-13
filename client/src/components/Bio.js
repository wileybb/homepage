import React, { Component } from 'react';

class Bio extends Component {

    render() {
        return (
    

            <div class="container">
                <div class="row title">
                    <h2> About Me</h2>
                    
                </div>
                <hr/>
                <div class="row">
                    <div class="col-md-3 "><img src="./images/200.png"/></div>
                    <div class="col-lg-4 "><p id="bio"> Hey! My name is Wiley Buchanan, I am 26 years old. I am from Berkeley, CA and still currently live there. I hope to soon get a job coding after I complete this full-stack development course. I am interested in block chain and all the different applications it could have including currency and trade. I am alos interested in urban farming and raising food in cities as a way to limit waste and create a more environmental and fair food system. In my free time I like to play piano and garden.</p></div>
                </div>
            </div>

        )
    }
}

export default Bio;