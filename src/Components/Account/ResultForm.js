import React from 'react';
import { Table, Container } from 'reactstrap';
import ResultFormItem from './ResultFormItem';

function ResultForm(props) {
    let { listAccount, editAccount ,deleteAccount } = props;

    return (
        <Container>
            <br />
            <h3>Danh sách Account</h3>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Cretate Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ResultFormItem 
                        listAccount={listAccount}
                        deleteAccount={deleteAccount}
                        editAccount ={editAccount}
                    />                
                </tbody>
            </Table>
        </Container>
    )
}

export default ResultForm