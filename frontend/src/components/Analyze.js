import React,  { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Analyze.css';

const Analyze = () => {
    const location = useLocation();
    const { codeInput } = location.state || {};
    const [type, setType] = useState('');
    const [explain, setExplain] = useState('');
    const [fixed, setFixed] = useState('');
    const [original, setOriginal] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    var hasFetched = false;

    const handleBackClick = () => {
        navigate('/');
    };

    const handleFixClick = () => {
        navigate('/fix', { state: { codeInput, fixed } });
    };
    
    
    useEffect(() => {
    if (!codeInput) return;
    if(hasFetched) return;
    
    const fetchData = async () => {
        hasFetched = true;
        setIsLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/api/chatgpt/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: codeInput }),
            });

            console.log('Response status:', response.status);
            const text = await response.text();  // Get raw response first
            console.log('Raw response:', text);

            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

            const data = JSON.parse(text);  // Parse manually
            console.log('Parsed data:', data);  // Inspect structure

            // Handle OpenAI's response format
            let parsedData = data.Response ? JSON.parse(data.Response.replace(/```json|```/g, '')) : data;
            setType(parsedData.type || '');
            setExplain(parsedData.explain || '');
            setFixed(parsedData.fixed || '');
        } catch (error) {
            console.error('Fetch error:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    fetchData();
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
                        {/* {original || 'No original code provided'} */}
                        <pre>{codeInput}</pre>
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
                        <p>{explain
                            ? explain.split('. ').filter(Boolean).map((sentence, index) => (
                                <p key={index}>{sentence.trim()}.</p>
                                ))
                            : <p>No explanation available</p>}
                        </p>
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