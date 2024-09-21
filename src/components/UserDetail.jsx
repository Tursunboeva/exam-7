
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleUser } from '../users/UsersSlice'; 

const UserDetail = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.singleUser);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch, userId]);

  if (status === 'loading') {
    return <p>Foydalanuvchi yuklanmoqda...</p>;
  }

  if (!user) {
    return <p>Foydalanuvchi topilmadi.</p>;
  }

  return (
    <div>
      <h1>{user.first_name} {user.last_name}</h1>
      <p>Email: {user.email}</p>
   
    </div>
  );
};

export default UserDetail;
