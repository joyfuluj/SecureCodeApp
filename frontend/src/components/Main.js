import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import Analyze from './Analyze';

const Main = () => {
    const [codeInput, setCodeInput] = useState('');
    const navigate = useNavigate()

    const handleAnalyzeClick = () => {
        // Navigate to the analyze page with the codeInput passed
        navigate('/analyze', { state: { codeInput } });
    };

    return (
        <div className="main">
            <h1 className="heading">Code Vulnerability Analyzer</h1>
            <p className="description">Paste your code below, and we'll analyze it for potential security vulnerabilities.</p>
            <div className="input-container">
                <label htmlFor="code" id="instruction">Paste Code</label>
                <textarea
                    id="code"
                    placeholder="Paste your code here..."
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    />            
            </div>
            <button className="analyze-btn" onClick={handleAnalyzeClick}>Analyze</button>
        </div>
    );
}

export default Main;
