import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
        
               

  

        <div class="container">

            <h2>Contact Me</h2>

            <p>Name</p> 
            <input type = "text" name = "first_name" placeholder="John Smith"/>

            <p>Email </p>
            <input type = "text" name = "email" placeholder="example@gmail.com"/>

            <p> Message</p>
            <textarea rows = "10" name = "message">        
                </textarea>
 
            <button formaction="#" >Submit</button>
  
        </div>
        )
    }

}

export default Contact;