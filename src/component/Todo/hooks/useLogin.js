import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


const serverUrl = process.env.REACT_APP_DIFFERENT_URL;


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        console.log("REACT_APP_DIFFERENT_URL:", serverUrl);

        const response = await fetch(`${serverUrl}/api/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            // save the user to local storage for user JWT
            localStorage.setItem('user', JSON.stringify(json));

            // Update the Auth context
            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};
