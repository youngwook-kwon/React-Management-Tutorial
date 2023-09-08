import React from 'react';
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell';

function Customer(props) {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.id} alt="profile"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.jbo}</TableCell>
        </TableRow>
    )        

}

export default Customer;
