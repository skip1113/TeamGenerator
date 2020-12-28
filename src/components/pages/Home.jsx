import React, { Component } from 'react';
import './style.css';
import { DeleteBtn, AddBtn, AddFormBtn, DeleteFormBtn } from '../buttons/ButtonList';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InputAssignment, InputTeam } from '../Form/Form';

class Home extends Component {
    state = {
        names: '',
        date: '',
        jobs: '',
        solo: [],
        duo: [],
        trio: [],
        jobNumber: []
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={6} className="assign-title">
                            Assignments
                            <InputAssignment />
                            <AddFormBtn />
                            <DeleteFormBtn />
                        </Col>
                        <Col xs={6} className="team-title">
                            Colleagues
                            <InputTeam />
                            <AddBtn />
                            <DeleteBtn />
                        </Col>
                    </Row>
                </Container>
                    
            </div>
        )
    }
}

export default Home;