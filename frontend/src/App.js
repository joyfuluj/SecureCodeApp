// import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
          fetch('http://127.0.0.1:5000/api/chatgpt/analyze', {
            method: 'GET',
            mode: 'cors',
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => setMessage(data.message))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>{message}</h1>
        </div>
    );
}

export default App;
