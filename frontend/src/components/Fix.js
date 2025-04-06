import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Fix.css';

const Fix = () => {
    const location = useLocation();
    const { codeInput } = location.state || {};
    const { fixed } = location.state || {};
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <main className="main-content">
        <h1>Code Vulnerability Analyzer</h1>

        <div className="sections-container">
            <section className="code-section">
                    <h2>Your code:</h2>
                    <div className="fix-code-block">
                        <pre>
                            <pre>{codeInput}</pre>
                        </pre>
                    </div>
                </section>

            <section className="fixed-section">
                    <div className="fix-copy">
                        <h2>Fixed code:</h2>
                        <img src="/copy_icon.png" className="copy_icon" alt="copy the code" />
                    </div>
                    <div className="fix-code-block">
                        <pre>
                        <pre>{fixed}</pre>
                        </pre>
                    </div>
            </section>
        </div>
        
        <div className="actions-container">
            <a href="/" className="back-link" onClick={handleBackClick}>← Back to Home</a>
            <div className="download-section">
                <button className="download-button">
                    <p>Download (python)</p>
                    <img src="/download_icon.png" className="download_icon" alt="download" />
                </button>
            </div>
        </div>
       
      </main>
    );
}

export default Fix;
