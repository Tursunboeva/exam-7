import { useGetUserQuery, useDeleteUserMutation } from '../../redux/api/productsApi';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Product = () => {
  const { data, refetch } = useGetUserQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    refetch(); // Ma'lumotlarni yangilash
  };

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      render: (avatar) => <img src={avatar} alt="Avatar" className="h-[50px] w-[50px] rounded-full" />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, user) => `${user.first_name} ${user.last_name}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Actions',
      render: (text, user) => (
        <div className="flex space-x-2">
          <Link
            to={`/users/${user.id}`}
            className="text-white font-semibold py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 transition"
          >
            Details
          </Link>
          <Button
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="my-10 w-full max-w-7xl mx-auto">
      <Table
        dataSource={data?.data || []}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        className="bg-white rounded-lg shadow-md"
      />
    </div>
  );
};

export default Product;
