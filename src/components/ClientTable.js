import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const TableContainer = styled.div`
    width: 80vw;
    margin: 0 auto;
    .root {
        width: '100%';
        margin-top: 10px;
        overflow-x: 'auto';
    }
    .table {
        min-width: 700px;
    }
`
export default function ClientTable(props) {
    
    let clientRows = props.clients.map((client, index) => {
        return <TableRow key={index}>
            <TableCell component="th" scope="row">
                {client.name}
            </TableCell>
            <TableCell align="right">{client.email}</TableCell>
            <TableCell align="right">{client.phoneNumber}</TableCell>
            <TableCell align="right">{client.projectStatus}</TableCell>
        </TableRow>
    });

    return (
        <TableContainer>
            <Paper className={"root"}>
                <Table className={"table"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Client Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Project Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientRows}
                    </TableBody>
                </Table>
            </Paper>
        </TableContainer>
    );
};