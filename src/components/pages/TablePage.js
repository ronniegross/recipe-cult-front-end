import React, { Component } from 'react';
import ClientTable from '../ClientTable';
import * as requestUtil from '../../Util/util';

class TablePage extends Component {
    state = {
        clients: []
    }

    async componentDidMount() {
        const clientsResponse = await requestUtil.getClients();
        this.setState({clients: clientsResponse});
    }

    render() {
        return (
            <div>
                <ClientTable 
                clients={this.state.clients}/>
            </div>
        );
    }
}

export default TablePage;