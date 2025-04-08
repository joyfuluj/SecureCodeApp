import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const Main = () => {
    const [code, setCodeInput] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const navigate = useNavigate()
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        if (file) {
            if (file.size > 5 * 1024 * 1024) {  // 5MB
                alert('Please upload a file smaller than 5 MB.');
                return;
            }
        }
        setIsFileUploaded(true);
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = () => {
                const fileContent = reader.result;
                setFileContent(fileContent); 
                setCodeInput(''); 
            };
            reader.readAsText(file);
        }
    };

    const handleRemoveFile = () => {
        setIsFileUploaded(false);
        setFileName(''); 
        setFileContent('');

        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the file input value
        }
    };

    const handleAnalyzeClick = () => {

        if (!code || typeof code !== 'string') {
            alert('\Please paste valid code before analyzing.');
            return;
        }

        if (code.length > 10000) {
            alert('Code input is too large. Please limit your code to 10,000 characters.');
            return;
        }
        const codeInput = formatCodeSnippet(code);
        console.log('Formatted Code:', codeInput);
        navigate('/analyze', { state: { codeInput } });
    };

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
                    disabled={isFileUploaded}
                    aria-label="Code input field"
                    />            
            </div>

            <div className="file-upload-container">
                <label htmlFor="file-upload" className="file-upload-label">Or upload a file</label>
                <input
                    id="file-upload"
                    type="file"
                    accept=".txt,.js,.py,.java,.cpp,.html,.css,.php" // to be updated
                    onChange={handleFileChange}
                    disabled={code !== ''}
                    ref={fileInputRef}
                    aria-label="Upload file"
                />
                <button className="remove-file-btn" onClick={handleRemoveFile}>Remove</button>
            </div>

            <button className="analyze-btn" onClick={handleAnalyzeClick}>Analyze</button>
        </div>
    );
}

export default Main;
