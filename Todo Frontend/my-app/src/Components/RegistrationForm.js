import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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

    if (!formData.confirmpassword) {
      newErrors.confirmpassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
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
        const response = await axios.post('http://localhost:8080/addusers', {
          email: formData.email,
          password: formData.password,
          confirmpassword: formData.confirmpassword
        });
        console.log('Form data submitted:', response.data);
        setSuccess(true);
        setFormData({
          email: '',
          password: '',
          confirmpassword: '',
        });
      } catch (error) {
        console.error('There was an error submitting the form:', error);
        setSuccess(false);
      }
    }
  };
  
  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-5 text-xl font-serif font-bold text-blue-700">
          Registration Form
        </div>

        {success && (
          <div className="mb-4 text-center text-green-600 font-semibold">
            Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input
                name="email"
                type="text"
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-3 rounded-md outline-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-3 rounded-md outline-blue-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input
                name="confirmpassword"
                type="password"
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-3 rounded-md outline-blue-500 ${
                  errors.confirmpassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter confirm password"
                value={formData.confirmpassword}
                onChange={handleChange}
              />
              {errors.confirmpassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmpassword}</p>
              )}
            </div>
          </div>

          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?
            <Link to='/login' className="font-semibold text-md hover:underline inline-block mt-4 md:mt-4 md:ml-4 text-blue-400">Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
