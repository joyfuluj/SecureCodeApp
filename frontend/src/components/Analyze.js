import React,  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Analyze.css';

const Analyze = ({ codeInput }) => {
    const [type, setType] = useState('');
    const [explain, setExplain] = useState('');
    const [original, setOriginal] = useState('');
    const [fixed, setFixed] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [triggerAnalyze, setTriggerAnalyze] = useState(false);
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/');
    };

    const handleFixClick = () => {
        navigate('/fix');
    };
    
    
    useEffect(() => {
        const abortController = new AbortController();
    
        const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/api/chatgpt/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: codeInput }),
            signal: abortController.signal,
            });
    
            if (!response.ok) throw new Error('Network response was not ok');
    
            const data = await response.json();
    
            let parsedData;
            if (data.Response) {
            try {
                const jsonString = data.Response.replace(/```json|```/g, '').trim();
                parsedData = JSON.parse(jsonString);
            } catch (e) {
                throw new Error('Failed to parse Markdown JSON');
            }
            } else {
            parsedData = data;
            }
    
            setType(parsedData.type || '');
            setExplain(parsedData.explain || '');
            setOriginal(parsedData.original || '');
            setFixed(parsedData.fixed || '');
    
        } catch (error) {
            if (!abortController.signal.aborted) {
            console.error('Error:', error);
            setError(error.message);
            }
        } finally {
            if (!abortController.signal.aborted) {
            setIsLoading(false);
            }
        }
        };
    
        fetchData();
    
        return () => abortController.abort();
    }, [codeInput]);


    return (
        <main className="main-content">
        {isLoading ? (
            <h1>Analyzing...</h1>) : (<>
        <h1>Code Vulnerability Analyzer</h1>
        <div className="sections-container">
            <section className="code-section">
                <h2>Your code:</h2>
                <div className="code-block">
                    <pre>
                        {original || 'No original code provided'}
                    </pre>
                </div>
            </section>

            <section className="vulnerability-section">
                <h3>Vulnerability Type:</h3>
                <div className="vulnerability-type-box">
                    <ul className="vulnerability-list">
                        <li>{type || 'No vulnerability type found'}</li>
                    </ul>
                </div>
                
                <h3 className="explanation-title">Explanation:</h3>
                <div className="explanation-box">
                    <div className="explanation-content">
                        <p>{explain || 'No explanation available'}</p>
                    </div>
                </div>
            </section>
        </div>

        <div className="actions-container">
                <a href="/" className="back-link" onClick={handleBackClick}>← Back to Home</a>
                <button className="fix-button" onClick={handleFixClick}>Fix Vulnerability &gt;&gt;</button>
        </div>
        </>
    )}
    </main>
);}

export default Analyze;