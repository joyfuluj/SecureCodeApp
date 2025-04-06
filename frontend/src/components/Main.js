import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="main">
            <h1 className="heading">Code Vulnerability Analyzer</h1>
            <p className="description">Paste your code below, and we'll analyze it for potential security vulnerabilities.</p>
            <div className="input-container">
                <label htmlFor="code" id="instruction">Paste Code</label>
                <textarea id="code" placeholder="Paste your code here..." />
            </div>
            <button className="analyze-btn">Analyze</button>
        </div>
    );
}

export default Main;
