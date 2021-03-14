import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [header, setHeader] = useState(null);

    useEffect(() => {
        fetchHeader();
    }, []);

    async function fetchHeader() {
        const fetchedHeader = (await axios.get('http://localhost:5000/test')).data;
        setHeader(fetchedHeader);
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-blue-500">{header}</h1>
            <p>{process.env.API_PORT}</p>
        </div>
    );
}
