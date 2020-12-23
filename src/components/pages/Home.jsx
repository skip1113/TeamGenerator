import React, { Component } from 'react';
import { DeleteBtn, AddBtn } from '../buttons/ButtonList'; 

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
        return(
            <div>
                <AddBtn />
                <DeleteBtn />
            </div>
        )
    }
}

export default Home;