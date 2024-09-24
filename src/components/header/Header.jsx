import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="bg-white p-6 shadow-lg border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-serif text-gray-800">
          <Link to="/">Users</Link>
        </div>
        <ul className="flex space-x-8">
          <li className="text-gray-700 hover:text-gray-900 transition duration-300">
            <Link to="/auth/login">Login</Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900 transition duration-300">
            <Link to="/auth/signup">Register</Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900 transition duration-300">
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
