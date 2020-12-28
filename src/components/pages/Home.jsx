import React, { Component } from 'react';
import './style.css';
import { DeleteBtn, AddBtn } from '../buttons/ButtonList';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                        </Col>
                        <Col xs={6} className="team-title">
                            Colleagues
                        </Col>
                    </Row>
                </Container>
                    <AddBtn />
                    <DeleteBtn />
            </div>
        )
    }
}

export default Home;