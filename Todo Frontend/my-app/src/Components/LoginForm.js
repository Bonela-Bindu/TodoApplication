import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      try {
        const response = await axios.post('http://localhost:8080/login', {
          email: formData.email,
          password: formData.password,
        });
        console.log('Login successful:', response.data);
        setSuccess(true);
        setLoginError('');
        // Redirect to TodoList page
        navigate('/todolist');
      } catch (error) {
        console.error('Login error:', error.response.data);
        setLoginError('Invalid email or password');
        setSuccess(false);
      }
    }
  };

  return (
    <div className="bg-blue-200 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
        <div className="bg-gray-800 shadow text-white font-bold shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
         Login Form
        </div>
        <form className="p-12 md:p-24" onSubmit={handleSubmit}>
          {success && (
            <div className="mb-4 text-center text-green-600 font-semibold">
              Login successful!
            </div>
          )}
          {loginError && (
            <div className="mb-4 text-center text-red-600 font-semibold">
              {loginError}
            </div>
          )}
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
            </svg>
            <input
              type="text"
              id="email"
              name="email"
              className={`bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full ${
                errors.email ? 'border border-red-500' : ''
              }`}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M19.92 8.688c-.949-3.759-4.301-6.435-8.288-6.688-5.031-.318-9.233 3.566-9.233 8.5 0 3.75 2.667 6.904 6.341 7.795v2.278c0 .553.448 1 1 1s1-.447 1-1v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .737.405 1.375 1 1.722v1.769c-3.274-.865-5.552-3.858-5.552-7.286 0-4.571 3.903-8.215 8.558-7.456 2.941.478 5.317 2.854 5.81 5.79.656 3.894-1.784 7.291-5.318 7.921-.108-.103-.274-.181-.465-.181-.553 0-1 .447-1 1 0 .479.336.874.787.975 4.719-.005 8.395-4.513 7.061-9.248zm-6.92-5.396c-1.103 0-2 .897-2 2 0 .737.405 1.375 1 1.722v2.278c0 .552.448 1 1 1s1-.448 1-1v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2z"/>
            </svg>
            <input
              type="password"
              id="password"
              name="password"
              className={`bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full ${
                errors.password ? 'border border-red-500' : ''
              }`}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded"
          >
            Login
          </button>
          <Link to="/" className="font-semibold text-md hover:underline inline-block mt-4 md:mt-4 md:ml-4 text-blue-400">
            Back to Registration
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
