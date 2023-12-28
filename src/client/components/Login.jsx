import React, { useState, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => { 
    setPassword(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();


        
        const data = JSON.stringify({
          email: email,
          password: password,
        })
        const h = new Headers();
        h.append('content-type', 'application/json');

        setIsLoading(true);

        const response = await fetch('http://localhost:3000/api/users/login', {
          headers: h,
          method: 'POST',
          body: data,
        });
        const responseData = await response.json();
        setIsLoading(false);
        if (responseData.error) {
          alert(responseData.errorMessage);
        } else {
          setEmail('');
          setPassword('');

          const token = responseData.token;
          console.log('Token: ', token);
          sessionStorage.setItem('initiativeToken', token);
          setIsLoading(true);
          setUser(responseData.user);
          console.log('User: ', user);
          navigate('/');
          }
  }


  return (
    <>
    <div className='position-relative'>
      <div className='card text-white bg-dark text-center align-items-start' style={{ width: '50vw', height: '75vh' }}>
        <div className='card-body outline'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type='submit' disabled={isLoading} >{isLoading ? 'loggin in...' : 'LOGIN'}</button>
          </form>
        </div>
    </div>
  </div>
  </>
  );
};

export default Login;