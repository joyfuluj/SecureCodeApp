import React, {useRef} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { highlightCodeText } from '../utils/highlightUtils';
import './Fix.css';

const Fix = () => {
    const location = useLocation();
    const { codeInput } = location.state || {};
    const { fixed } = location.state || {};
    const { keyword_o } = location.state || {};
    const { keyword_f } = location.state || {};
    const navigate = useNavigate()
    const fixedCodeRef = useRef(null); // Reference to the fixed code block

    const handleBackClick = () => {
        navigate('/');
    };

    const handleCopyClick = () => {
        if (fixedCodeRef.current) {
            const textToCopy = fixedCodeRef.current.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Fixed code copied!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    };


    return (
        <main className="main-content">
        <h1>Secure Code Fix Implemented</h1>

        <div className="sections-container">
            <section className="code-section">
                    <h2>Your code:</h2>
                    <div className="fix-code-block">
                        <pre>
                            <pre>{highlightCodeText(codeInput, keyword_o, 'original')}</pre>
                        </pre>
                    </div>
                </section>

            <section className="fixed-section">
                    <div className="fix-copy">
                        <h2>Fixed code:</h2>
                        <img 
                            src="/copy_icon.png" 
                            className="copy_icon" 
                            alt="copy the code"
                            onClick={handleCopyClick}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="fix-code-block">
                        <pre ref={fixedCodeRef}> // can access the code with "fixedCodeRef.current"
                        <pre>{highlightCodeText(fixed, keyword_f, 'fixed')}</pre>
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
