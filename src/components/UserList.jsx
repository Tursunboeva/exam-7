
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../users/UsersSlice'; 
import { Link } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId)); 
  };

  if (status === 'loading') {
    return <p>Foydalanuvchilar yuklanmoqda...</p>;
  }

  return (
    <div>
      <h1>Foydalanuvchilar ro'yxati</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.first_name} {user.last_name}</Link>
            <button onClick={() => handleDelete(user.id)}>O'chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
