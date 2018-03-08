import React, { Component } from 'react';
import validator from 'react-validation';


class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "lakhvinder",
        email: "lakhvinder@gmail.com"
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
    
  
    handleInputChange(event) {
      this.form.validateFields(event.currentTarget);
      
  
      this.setState({
        [name]: event.target.value,
        [email]:event.target.value,
      });
    }
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      var self = this;
      fetch('http://localhost/reactbk/', { 
        method: 'POST',
        body: data
      })
      .then( (response) => {
        return response.json()    
     })
     .then( (json) => {
       if(json.status===true){
         alert(json.msg);
       }
        console.log('parsed json', json)
     })
     .catch( (ex) => {
        console.log('parsing failed', ex)
     })
     
    }
    
    render() {
      return (<div>
        <section className="footer-contact-area section_padding_100 clearfix" id="contact">
        <div className="container">
            <div className="row">
                
                   
                    <div className="contact_from">
                        <form onSubmit={this.handleSubmit}>
                           
                            <div className="contact_input_area">
                                <div className="row">
                                   
                                    <div className="col-md-12">
                                        <div className="form-group">
                                        <input
                                        name="name"
                                        type="text"
                                        className="form-control"                                        
                                         id="name" 
                                         placeholder="Your Name" 
                                         required="required"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                    
                                            
                                        </div>
                                    </div>
                                  
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input 
                                            type="email"
                                             className="form-control" 
                                             name="email" id="email" 
                                             placeholder="Your E-mail"
                                             value={this.state.email}
                                             onChange={this.handleInputChange}
                                              required/>
                                        </div>
                                    </div>
                                   
                                    <div className="col-12">
                                        <div className="form-group">
                                        <input 
                                            type="password"
                                             className="form-control" 
                                             name="password" id="password" 
                                             placeholder="password"
                                            
                                             onChange={this.handleInputChange}
                                             /> 
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                   
                                      <button onSubmit={this.handleSubmit}>Do the thing</button>
                                 
                                    </div>
                                </div>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        
    </section>
    
       
        </div>
      );
    }
  }
  
  

export default SignUp