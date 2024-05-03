import React from 'react'

const UserCard = ({user, deleteUser, setUpdateUser}) => {

    console.log(user);

    const handleDelete = () => {
        deleteUser('users', user.id);
    }

    const handleEdit = () => {
        setUpdateUser(user);
    }

    return (
        <section>
            <h2>{user.first_name} {user.last_name}</h2>
            <hr />
            <ul>
                <li><span>Email:</span><span>{user.email}</span></li>
                <li><span>Birthday:</span><span>{user.birthday}</span></li>
            </ul>
            <hr />
            <div>
                <button onClick={handleDelete}>delete</button>
                <button onClick={handleEdit}>edit</button>
            </div>
        </section>
    )
}

export default UserCard;
