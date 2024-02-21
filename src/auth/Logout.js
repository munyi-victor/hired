import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Link to={"/"} onClick={logout} className='button'>Logout</Link>
    </div>
  )
}

export default Logout;