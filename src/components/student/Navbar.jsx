import React from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-300 py-4 lg:py-5 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
        <div className="flex items-center gap-5">
          <button className="hover:text-gray-900 transition-all">Become Educator</button>
          <Link to="/my-enrollments" className="hover:text-gray-900 transition-all">My Enrollments</Link>
        </div>

        {/* Show Sign-In or User Button */}
        {!user ? (
          <button 
            onClick={openSignIn} 
            className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all">
            Create Account
          </button>
        ) : (
          <UserButton />
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3 sm:gap-5 text-gray-600">
        <div className="flex flex-col items-start gap-1">
          {user && (
            <>
              <button className="hover:text-gray-900 transition-all">Become Educator</button>
              <Link to="/my-enrollments" className="hover:text-gray-900 transition-all">My Enrollments</Link>
            </>
          )}
        </div>
      
        
        {/* Show User Icon or Sign-In Button */}
        {!user ?  (
          <button onClick={openSignIn} className="p-2 rounded-full hover:bg-gray-200 transition">
            <img src={assets.user_icon} alt="User Icon" className="w-8 h-8" />
          </button>
        ) : (
          <UserButton />
        )}
      </div>

      {/* Debugging Message */}
      {isCourseListPage && <p className="text-red-500 text-sm">You are on the Course List Page</p>}
    </div>
  );
};

export default Navbar;
