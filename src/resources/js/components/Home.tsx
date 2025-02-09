import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        setMessage('Welcome to the Home Page!');
    }, []);

    return (
        <div>
            <h1>{message}</h1>
            <p>This is the home page rendered with React.</p>
        </div>
    );
};

export default Home;