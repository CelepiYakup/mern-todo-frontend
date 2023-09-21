import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignup = () => {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            // User can be stored in local storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update to Auth
            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};
