import React from 'react';
import './Fix.css';

const Fix = () => {
    return (
        <main className="main-content">
        <h1>Code Vulnerability Analyzer</h1>

        <div className="sections-container">
            <section className="code-section">
                    <h2>Your code:</h2>
                    <div className="fix-code-block">
                        <pre>
                            {`import yaml  
    def yaml.load(filename):  
    "'  

    Use the filename variable to open a file, 
    load its contents into a variable with yaml,
    and return it."  

    with open(filename, 'r') as f:  
    data = yaml.load(f, Loader=yaml.Basel.oader)  
    return data`}
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
                            {`import yaml
    def yaml_load(filename):
    ''' 
    Use the filename variable to open a file,
    load its contents into a variable with yaml, 
    and return it.
    '''
    with open(filename, 'r') as f:
        data = yaml.safe_load(f)
        return data`}
                        </pre>
                    </div>
            </section>
        </div>
        
        <div className="actions-container">
            <a href="/" className="back-link">← Back to Home</a>
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
