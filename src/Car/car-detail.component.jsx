import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class CarDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {car:[]};
      }
      componentDidMount() {
      
        let user=fetch('http://localhost:5000/getcar/'+this.props.params.id, { 
            method: 'get',
           
           
          })
          .then( (response) => {
            return response.json()    
         })
         .then( (json) => {
           if(json.status===true){
            
            const car=  json.cars[0];
            this.setState({car});
           
        }
            
           })
       
      };
    
    handleRedirect(){
        browserHistory.push('/cars');
    }
    render(){
        const cars = this.props.route.data;
        const id = this.props.params.id;
        const car = this.state.car;

        return (
            <div>
                <h1>{car.name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car.media} alt={car.name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {car.model}</li>
                           <li><strong>Make</strong>: {car.make}</li>
                           <li><strong>Year</strong>: {car.year}</li>
                           <li><strong>Price</strong>: {car.price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                    <Link to={"/cars/edit/"+car.id} key={car.id}>Edit
                </Link>
                        
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail