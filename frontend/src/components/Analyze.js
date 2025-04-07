import React,  { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { highlightCodeText } from '../utils/highlightUtils';
import './Analyze.css';

const Analyze = () => {
    const location = useLocation();
    const { codeInput } = location.state || {};
    const [type, setType] = useState('');
    const [explain_o, setExplainO] = useState('');
    const [explain_f, setExplainF] = useState('');
    const [fixed, setFixed] = useState('');
    const [keyword_o, setKeywordO] = useState('');
    const [keyword_f, setKeywordF] = useState('');
    const [extension, setExtension] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    var hasFetched = false;

    const handleBackClick = () => {
        navigate('/');
    };

    const handleFixClick = () => {
        navigate('/fix', { state: { codeInput, fixed, keyword_o, keyword_f, extension, explain_f } });
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
            const text = await response.text();  // get raw response first
            console.log('Raw response:', text);

            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

            const data = JSON.parse(text);  // parse manually
            console.log('Parsed data:', data);  // inspect structure

            // Handle OpenAI's response format
            let parsedData = data.Response ? JSON.parse(data.Response.replace(/```json|```/g, '')) : data;
            setType(parsedData.type || '');
            setExplainO(parsedData.explain_o || '');
            setExplainF(parsedData.explain_f || '');
            setFixed(parsedData.fixed || '');
            setKeywordO(parsedData.keyword_o || '');
            setKeywordF(parsedData.keyword_f || '');
            setExtension(parsedData.extension || '');
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
            <h1 className="analyzing-text">Analyzing...</h1>) : (<>
        <h1>Code Vulnerability Analysis</h1>
        <div className="sections-container">
            <section className="code-section">
                <h2>Your code:</h2>
                <div className="code-block">
                    <pre>{highlightCodeText(codeInput, keyword_o, 'original')}</pre>
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
                        {explain_o
                            ? explain_o.split('. ').filter(Boolean).map((sentence, index) => (
                                <p key={index}>{sentence.trim()}.</p>
                                ))
                            : <p>No explanation available</p>}
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
