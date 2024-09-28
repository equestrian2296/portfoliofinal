import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';

const auth = getAuth();

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false); // Set loading to false when user state is determined
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while checking auth state
    }

    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    );
}

export default Dashboard;
