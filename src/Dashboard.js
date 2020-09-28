import Axios from 'axios';
import React, { Component } from 'react';
import {Container, Table, Button} from 'reactstrap';
import AppNav from './AppNav';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            creditScores: [],
            creditScore: [],
            name: [],
            id: 0,

        };
    }

    componentDidMount() {
        Axios.get(`http://localhost:8080/api/dashboard`).then(res => {
            console.log(res);
            this.setState({ creditScores: res.data });
        });
    }



    state = {  }
    render() { 

        let rows = this.state.creditScores.map(creditScore =>
            (<tr key={creditScore.id}>
                <td>{creditScore.name}</td>
                <td>{creditScore.surname}</td>
                <td>{creditScore.ssn}</td>
                <td>{creditScore.phone}</td>
                <td>{creditScore.budget}</td>
                <td>{creditScore.score}</td>
                <td>{creditScore.limit}</td>
                <Button color="dark">{creditScore.result}</Button>
            </tr>));
        return ( 
            <div>
                <AppNav />
                <Container>
                    <h3> Credit Score Result</h3>
                    <Table className='mt-4'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Social Security Number</th>
                                <th>Phone Number</th>
                                <th>Budget</th>
                                <th>Score</th>
                                <th>Limit</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Container>
            </div>
         );
    }
}
 
export default Dashboard;