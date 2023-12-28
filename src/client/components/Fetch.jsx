import React, { useEffect, useState } from 'react'


const Fetch = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {

            const response = await fetch('http://localhost:3000/api/users/login', {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('initiativeToken'),
                }
            })

            const result = await response.json();

            if (result.error)
                throw new Error(result.errorMessage);

            setUsers(result.users);

        } catch (err) {
            alert('Failed to fetch users ' + err.message);
            alert('Failed to fetch users ', err);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={'user-row-' + index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Fetch