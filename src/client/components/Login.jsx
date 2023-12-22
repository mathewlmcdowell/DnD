import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../config";
import { AppContext } from "../appcontextprovider";

const Login = () => {
    const { setIslogin, setUser } = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            email: email,
            password: password,
        })

        const h = new Headers();
        h.append('content-type', 'application/json');

        setIsLoading(true);

        const response = await fetch(API_URL + '/login', {
            headers: h,
            method: 'POST',
            body: data,
        })

        const responseData = await response.json();

        setIsLoading(false);

        if (responseData.error) {
            alert(responseData.errorMessage);
        } else {
            setEmail('');
            setPassword('');

            const token = responseData.token;
            sessionStorage.setItem('shoppingToken', token);

            setIslogin(true);
            setUser(responseData.user);

            alert('Login successfull');
            navigate('/dashboard');
        }


    }

    return (
      <>
      <div className='position-relative'>
        <div className='card text-white bg-dark' style={{ width: '50vw', height: '75vh' }}>
          <div className='card-body .outline'>
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
              <button type='submit'>Login</button>
            </form>
            <p>{message}</p>
          </div>
      </div>
    </div>
    </>
    );
  };
  
  export default Login;
  
