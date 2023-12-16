import React from 'react';
import PropTypes from 'prop-types'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter} = props;
    console.log(props)
        return (
            <div class='table'>
                <table>
                    <TableHeader />
                    <TableBody characterData={characterData} removeCharacter={removeCharacter} />
                </table>
                <button onClick={props.logOut}>Log Out</button>
            </div>
        );
}

// Table.propTypes = {
//     characterData: PropTypes.array.isRequired,
//     removeCharacter: PropTypes.func.isRequired,
//     logOut: PropTypes.func.isRequired
// }

export default Table;