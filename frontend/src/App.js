import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Analyze from './components/Analyze';
import Fix from './components/Fix';
import './App.css';

function App() {
  // const [type, setType] = useState('');
  // const [explain, setExplain] = useState('');
  // const [original, setOriginal] = useState('');
  // const [fixed, setFixed] = useState('');
  // const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const abortController = new AbortController(); // For cancelling requests
  //   const signal = abortController.signal;

  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch('http://127.0.0.1:5000/api/chatgpt/analyze', {
  //         method: 'GET',
  //         mode: 'cors',
  //         signal, // Pass the abort signal
  //       });

  //       if (!response.ok) throw new Error('Network response was not ok');
        
  //       const data = await response.json();
  //       console.log('Success:', data);

  //       let parsedData;
  //       if (data.Response) {
  //         try {
  //           const jsonString = data.Response.replace(/```json|```/g, '').trim();
  //           parsedData = JSON.parse(jsonString);
  //         } catch (e) {
  //           throw new Error('Failed to parse Markdown JSON');
  //         }
  //       } else {
  //         parsedData = data;
  //       }

  //       if (!signal.aborted) { // Update state if not cancelled
  //         setType(parsedData.type || '');
  //         setExplain(parsedData.explain || '');
  //         setOriginal(parsedData.original || '');
  //         setFixed(parsedData.fixed || '');
  //       }
  //     } catch (error) {
  //       if (!signal.aborted) { // Log errors if not cancelled
  //         console.error('Error:', error);
  //         setError(error.message);
  //       }
  //     } finally {
  //       if (!signal.aborted) {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     abortController.abort(); // Clean up
  //   };
  // }, []);

  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      {/* <Analyze /> */}
      {/* <Fix /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/fix" element={<Fix />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;