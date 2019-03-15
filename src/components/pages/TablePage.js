import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
const createData = (name, email, phoneNumber, projectStatus) => {
    id += 1;
    return { id, name, email, phoneNumber, projectStatus };
}

const rows = [
    createData('Facebook', "markzuck@gmail.com", "123-234-3456", "Planning"),
    createData('Google', "google@gmail.com", "845-153-2649", "Complete"),
    createData('Amazon', "JeffBezos@gmail.com", "276-231-4587", "Planning")
];

const TableContainer = styled.div`
    width: 80vw;
    margin: 0 auto;
`

function TablePage(props) {
    const { classes } = props;

    return (
        <TableContainer>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Client Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Project Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
                                <TableCell align="right">{row.projectStatus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </TableContainer>
    );
}

export default withStyles(styles)(TablePage);
