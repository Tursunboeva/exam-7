import { useParams, Link } from "react-router-dom";
import { useGetUserByIdQuery } from "../../redux/api/productsApi";
import { Card, Typography, Spin } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const Users = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserByIdQuery(id);

  if (isLoading) return <Spin size="large" className="flex justify-center mt-40" />;
  if (isError) return <div className="text-center mt-40 text-red-600">Error loading user details.</div>;

  const user = data?.data;

  return (
    <div>
     
      <div className='w-[1200px] m-auto my-10 flex'>
        <div className="m-auto">
          {user && (
            <Card
              key={user.id}
              className='bg-white shadow-2xl'
            >
              <div className='relative'>
                <img
                  alt={`${user.first_name} ${user.last_name}`}
                  src={user.avatar}
                  className='w-full object-cover rounded-t-lg'
                />
              </div>
              <div className='p-4'>
                <Meta
                  title={<span className='text-lg font-bold text-blue-900'>{`${user.first_name} ${user.last_name}`}</span>}
                  description={<span className='text-gray-600'>{user.email}</span>}
                />
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
