import { useNavigate } from "react-router-dom";

const Logout = () => {


    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('initiativeToken');
        setIslogin(false);
        setUser(null);
        navigate('/');
    }, [])
}

export default Logout