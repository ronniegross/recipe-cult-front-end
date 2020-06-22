import React, { Component } from 'react';
import ClientTable from '../ClientTable';
import * as requestUtil from '../../util/requestUtil';

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