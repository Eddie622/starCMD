import React, { useEffect, useState } from "react";

const App: React.FC = () => {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        fetch("/api/user")
        .then((res) => res.json())
        .then((data) => setUser(data));
    }, []);

    return (
        <div>
        <h1>Welcome, {user ? user.name : "Guest"}!</h1>
        </div>
    );
};

export default App;