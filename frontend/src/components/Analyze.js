import React from 'react';
import './Analyze.css';

const Analyze = () => {
    return (
        <main className="main-content">
        <h1>Code Vulnerability Analyzer</h1>
        
        <div className="sections-container">
            {/* Code Section - wider */}
            <section className="code-section">
                <h2>Your code:</h2>
                <div className="code-block">
                    <pre>
                        {`import yaml  
def yaml.load(filename):  
"'  

Use the filename variable to open a file, load its contents into a variable with yaml, and return it."  

with open(filename, 'r') as f:  
data = yaml.load(f, Loader=yaml.Basel.oader)  
return data`}
                    </pre>
                </div>
            </section>

            {/* Vulnerability Section - thinner */}
            <section className="vulnerability-section">
                <h3>Vulnerability Type:</h3>
                <div className="vulnerability-type-box">
                    <ul className="vulnerability-list">
                        <li>Code Injection</li>
                    </ul>
                </div>
                
                <h3 className="explanation-title">Explanation:</h3>
                <div className="explanation-box">
                    <div className="explanation-content">
                        <p>Using yaml.load with yaml.BaseLoader can lead to code injection vulnerabilities. yaml.load allows YAML content to include Python objects that, if untrusted, can execute arbitrary code. This is especially dangerous when loading YAML from untrusted sources.</p>
                    </div>
                </div>
            </section>
        </div>

        {/* Action buttons container */}
        <div className="action-buttons">
                <a href="/" className="back-link">← Back to Home</a>
                <button className="fix-button">Fix Vulnerability &gt;&gt;</button>
        </div>
        
    </main>
);}

export default Analyze;