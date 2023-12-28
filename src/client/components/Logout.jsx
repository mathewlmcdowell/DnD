import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { setIslogin, setUser } = useContext(AppContext);

    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('initiativeToken');
        setIslogin(false);
        setUser(null);
        navigate('/');
    }, [])
}

export default Logout