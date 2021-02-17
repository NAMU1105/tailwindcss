import { useState, useCallback, useEffect } from 'react';
let logoutTimer;

export const useAuth = () => {
    //   const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userID, setUserID] = useState();
    const [token, setToken] = useState(null);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();

    // useEffect(() => {
    //     const storageToken = JSON.parse(localStorage.getItem('userData'));
    //     if (storageToken) {
    //         setUserID(storageToken.userId);
    //         setToken(storageToken.token);
    //         const expirationDate = new Date(storageToken.expiration);
    //         console.log(`expirationDate:`, expirationDate);
    //         setTokenExpirationDate(expirationDate);
    //     }
    // }, []);

    const login = useCallback(({ userId, token, expirationDate }) => {
        setUserID(userId);
        setToken(token);
        expirationDate = new Date(expirationDate);
        console.log(`expirationDate:`, expirationDate);
        setTokenExpirationDate(expirationDate);

        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: userId,
                token: token,
                expiration: expirationDate.toISOString(),
            })
        );
    }, []);

    const logout = useCallback(() => {
        setUserID(null);
        setToken(null);
        setTokenExpirationDate(null);
        localStorage.removeItem('userData');
    }, []);

    // Timer
    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime =
                tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    });

    return { userID, token, tokenExpirationDate, login, logout };
};
