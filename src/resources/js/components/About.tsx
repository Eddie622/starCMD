import React, { useState, useEffect } from "react";

const About: React.FC = () => {
    const [info, setInfo] = useState<string>('');

    useEffect(() => {
        setInfo('This page provides about information.');
    }, []);

    return (
        <div>
            <h1>About Us</h1>
            <p>{info}</p>
        </div>
    );
};

export default About;