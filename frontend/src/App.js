import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [type, setType] = useState('');
  const [explain, setExplain] = useState('');
  const [original, setOriginal] = useState('');
  const [fixed, setFixed] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController(); // For cancelling requests
    const signal = abortController.signal;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://127.0.0.1:5000/api/chatgpt/analyze', {
          method: 'GET',
          mode: 'cors',
          signal, // Pass the abort signal
        });

        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        console.log('Success:', data);

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

        if (!signal.aborted) { // Update state if not cancelled
          setType(parsedData.type || '');
          setExplain(parsedData.explain || '');
          setOriginal(parsedData.original || '');
          setFixed(parsedData.fixed || '');
        }
      } catch (error) {
        if (!signal.aborted) { // Log errors if not cancelled
          console.error('Error:', error);
          setError(error.message);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort(); // Clean up
    };
  }, []);

  return (
    <div className="App">
      <Header />
      {error ? (
        <h1>{error}</h1>
      ) : isLoading ? (
        <h1>Loading analysis...</h1>
      ) : (
        <div>
          <h2>Vulnerability Type</h2>
          <p>{type || 'No vulnerability type found'}</p>
          
          <h2>Explanation</h2>
          <p>{explain || 'No explanation available'}</p>

          <h2>Original Code</h2>
          <pre>{original || 'No original code provided'}</pre>
          
          <h2>Fixed Code</h2>
          <pre>{fixed || 'No fix provided'}</pre>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;