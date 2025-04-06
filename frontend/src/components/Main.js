import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import Analyze from './Analyze';

const Main = () => {
    const [code, setCodeInput] = useState('');
    const navigate = useNavigate()

    const handleAnalyzeClick = () => {
        const codeInput = formatCodeSnippet(code);
        console.log('Formatted Code:', codeInput);
        navigate('/analyze', { state: { codeInput } });
    };

    //format the input code
    const formatCodeSnippet = (rawText) => {
        if (!rawText) return '';
    
        //Replace "\n" with newlines
        let formatted = rawText.replace(/\\n/g, '\n');
    
        //Replace escape
        formatted = formatted.replace(/\\\\/g, '\\');
    
        //Trim leading or trailing whitespace
        formatted = formatted.trim();
    
        return formatted;
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
                    value={code}
                    onChange={(e) => setCodeInput(e.target.value)}
                    />            
            </div>
            <button className="analyze-btn" onClick={handleAnalyzeClick}>Analyze</button>
        </div>
    );
}

export default Main;
