import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await axios.post('http://localhost:5000/user/signin', { email, password });

      setSuccess('Login successful!!!');
      
      setTimeout(() => {
        navigate('/home');
      }, 1500); 

      console.log(result);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('Login failed. Please try again.');
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-900'>
        <form onSubmit={handleSubmit}>
          <section className="flex w-[30rem] flex-col space-y-10">
            <div className="text-center text-4xl font-medium text-white">Log In</div>

            {error && <div className="text-red-500 text-center">{error}</div>}
            {success && <div className="text-green-500 text-center">{success}</div>}

            <div
              className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-white"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div
              className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
            >
              <input
                type="password"
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-white"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <button
              className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
              type="submit"
              disabled={loading} 
            >
              {loading ? 'Signing In...' : 'SIGN IN'}
            </button>

            <a
              href="#"
              className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
            >FORGOT PASSWORD?</a>
          </section>
        </form>
        <p className="text-center text-lg text-white">
          Don't Have an Account -{' '}
          <Link
            to='/register'
            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}

export { Signin };
