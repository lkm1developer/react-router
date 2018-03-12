import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {cars:[]};
      }
      componentDidMount() {
      
        let user=fetch('http://localhost:5000/getallcars', { 
            method: 'get',
           
          })
          .then( (response) => {
            return response.json()    
         })
         .then( (json) => {
           if(json.status===true){
            
            const cars=  json.cars;
            this.setState({cars});
           
        }
            
           })
       
      };
    
      
    render(){
       
        // Map through cars and return linked cars
        const carNode = this.state.cars.map((car) => {
            return (
                <Link
                    to={"/cars/"+car._id}
                    className="list-group-item"
                    key={car._id}><img src={car.media}width="20"/>
                    {car.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car
