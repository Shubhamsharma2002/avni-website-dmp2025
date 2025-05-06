import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <form
        onSubmit={handleLogin}
        className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 focus:outline-none"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <a href="/reset-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </form>

      {/* View Reports Section */}
      <div className="w-full px-4 py-6 bg-amber-100 text-center shadow-inner mt-8 -mb-15">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">📊 View Reports</h3>
        
        <p className="text-sm text-gray-600 mb-6 max-w-3xl mx-auto">
          Avni provides reports using one of two different external BI tools — <strong>Metabase</strong> and <strong>Jasper Reports</strong>.
          You can find out which reports are used by your organisation from your system administrator.
        </p>
        <p className="text-lg text-gray-700 mb-1">Choose your reporting system</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Metabase</button>
          <button className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">Jasper Reports</button>
          <button className="bg-gray-700 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">Custom Report</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
