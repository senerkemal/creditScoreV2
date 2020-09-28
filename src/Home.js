import React, { Component } from 'react';
import AppNav from './AppNav';
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";



class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {
      name:"",
      surname:"",
      ssn:"",
      phone:"",
      budget:"",
      user: [],
      users: {},
      hasLoginFailed: false,
      showSuccessfulMessage: false
    }

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }  


  componentDidMount(){
    console.log(this.props);
}
    handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
  

}

handleSubmit(event) {
  const { name, surname, ssn, phone, budget } = this.state;

  axios
    .post(
      "http://localhost:8080/api",
      {
        user: {
          name: name,
          surname: surname,
          ssn: ssn,
          phone: phone,
          budget: budget

        }
      },
      { withCredentials: true }
    )
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleSuccessfulAuth(response.data);
      }
    })
    .catch(error => {
      console.log("login error", error);
    });
  event.preventDefault();
}

loginClicked = () => {
    if(this.state.username==='user' && this.state.email==='sk@gmail.com' && this.state.password==='slow')
    {
        //const history = createBrowserHistory();
        this.setState({showSuccessfulMessage: true, hasLoginFailed: false})
        window.location = '/dashboard';
        
        
    }

    else{
        
        this.setState({showSuccessfulMessage: false})
        this.setState({hasLoginFailed:true})
    }
        
        
}
  
  state = {  }
    render() { 


        
        return (
            <div>
              <AppNav/>
              <h3 className="text-center">Credit Score Results</h3>
              <Container>
                <Form onSubmit={this.handleSubmit}> 
                  <FormGroup>
                    <Label for= "name">Name</Label>
                    <Input  type= "text" name="name" id="name" placeholder="Name" value={this.state.name}  onChange={this.handleChange} ></Input>
                  </FormGroup>
        
                  <FormGroup>
                    <Label for= "surname">Surname</Label>
                    <Input   type= "text" name="surname" id="surname" placeholder="Surname" value={this.state.surname}  onChange={this.handleChange}></Input>
                  </FormGroup>
        
                  <FormGroup>
                    <Label for= "ssn">Social Security Number</Label>
                    <Input type="text" name="ssn" id="ssn" placeholder="Social Security Number" value={this.state.ssn}  onChange={this.handleChange}></Input>                        
                  </FormGroup>
        
                  <FormGroup>
                    <Label for= "ssn">Phone Number</Label>
                    <Input type="tel" name="phone" id="phone" placeholder="Phone Number" value={this.state.phone}  onChange={this.handleChange}></Input>                        
                  </FormGroup>

                  <FormGroup>
                    <Label for= "ssn">Budget</Label>
                    <Input type="number" name="budget" id="budget" placeholder="Budget" value={this.state.budget}  onChange={this.handleChange}></Input>                        
                  </FormGroup>
        
                  <FormGroup>
                    <Button color="primary" type="submit">Check</Button>{' '}
                  </FormGroup>
                
                </Form>  
              </Container>
        
        </div>
        
          );
    }
}
 
export default Home;