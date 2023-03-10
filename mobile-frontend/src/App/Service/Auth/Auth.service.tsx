import React, {useEffect, useState} from 'react';
import UserData, {IUserSchema} from "../../../data/User";

const AuthService = () => {
    const [userData, setUserData] = useState<IUserSchema | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        UserData()
            .then(data => {
                setUserData(data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    const ready = !loading && error == null;
    const isLogin = userData !== null && userData.isAuth;
    const isAdmin = isLogin && userData?.isAdmin;



    return {
        ready, loading, error, isLogin, isAdmin
    }
};

export default AuthService;