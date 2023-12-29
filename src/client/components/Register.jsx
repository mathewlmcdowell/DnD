import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            name: name,
            email: email,
            password: password,
        })

        const h = new Headers();
        h.append('content-type', 'application/json');

        setIsLoading(true);

        const response = await fetch('http://localhost:3000/api/users/register', {
            headers: h,
            method: 'POST',
            body: data,
        })

        const responseData = await response.json();

        setIsLoading(false);

        if (responseData.error) {
            alert(responseData.errorMessage);
        } else {
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');

        }


    }

    return (
        <>
            <div className="container my-5 ">
                <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
                    <div className="col-6">
                        <div className="card card-primary bg-dark-subtle border border-dark-subtle">
                            <div className="card-header bg-dark border border-dark-subtle">
                                <h2 className="text-center text-white">Register</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleRegister}>
                                    <div className="form-group">
                                        <label htmlFor="" className="text-white">Name</label>
                                        <input type="text" value={name} className="form-control" onChange={e => setName(e.currentTarget.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="text-white">Email</label>
                                        <input type="email" value={email} className="form-control" onChange={e => setEmail(e.currentTarget.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="text-white">Password</label>
                                        <input type="password" value={password} className="form-control" onChange={e => setPassword(e.currentTarget.value)} required />
                                    </div>
                                    <div className="form-group my-4">
                                        <button type="submit" className="btn btn-outline-secondary btn-light" disabled={isLoading} >{isLoading ? 'Registering...' : 'REGISTER'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register