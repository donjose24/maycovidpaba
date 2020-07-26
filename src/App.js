import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const randomIndex = (length) => {
    return Math.floor(Math.random() * Math.floor(length));
  };

  const randomGif = () => {
    const gifList = [
      'https://media1.tenor.com/images/f0ced5dc7f46d7105303b58223e0441b/tenor.gif?itemid=17249941',
      'https://media1.tenor.com/images/867ae049f869b5e63274a9d03f7c5a5e/tenor.gif?itemid=13791096',
    ];

    const index = randomIndex(gifList.length);

    return gifList[index];
  };

  const fetchData = async () => {
    const response = await axios.get(
      'https://corona.lmao.ninja/v2/countries/philippines?yesterday=true&strict=true'
    );
    setApiData(response.data);
    setIsLoading(false);
  };

  const info = () => {
    if (isLoading) {
      return (
        <img src={process.env.PUBLIC_URL + '/spinner.gif'} alt="loading.." />
      );
    } else {
      return (
        <div className="data-list-container">
          <div>
            <img
              src={randomGif()}
              style={{
                width: 300,
                height: 168,
                maxWidth: 683,
                backgroundColor: 'rgb(63, 63, 63)',
              }}
            />
          </div>
          <ul className="data-list">
            <li>
              <span>Total tests:</span>
              <span
                style={{ color: 'orange', fontWeight: 600, marginLeft: '10px' }}
              >
                {apiData.tests.toLocaleString()}
              </span>
            </li>
            <li>
              <span>Total confirmed cases:</span>
              <span
                style={{ color: 'red', fontWeight: 600, marginLeft: '10px' }}
              >
                {apiData.cases.toLocaleString()}
              </span>
            </li>
            <li>
              <span>Total active cases:</span>
              <span
                style={{ color: 'red', fontWeight: 600, marginLeft: '10px' }}
              >
                {apiData.active.toLocaleString()}
              </span>
            </li>
            <li>
              <span>Total recoveries:</span>
              <span style={{ color: 'green', fontWeight: 600 }}>
                {apiData.recovered.toLocaleString()}
              </span>
            </li>
            <li>
              <span>Total deaths:</span>
              <span
                style={{ color: 'red', fontWeight: 600, marginLeft: '10px' }}
              >
                {apiData.deaths.toLocaleString()}
              </span>
            </li>
            <li>
              <span>Total resurrections:</span>
              <span
                style={{ color: 'green', fontWeight: 600, marginLeft: '10px' }}
              >
                1
              </span>
            </li>
          </ul>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchData().then();
  }, []);

  const randomQuote = () => {
    const quotes = [
      'Huwag lumabas kung di naman kailangan.',
      'Bawal pa rin mag mañanita.',
      'Bat wala pa ring mass testing?',
    ];
    const index = randomIndex(quotes.length);

    return quotes[index];
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1
          className="important-header with-emphasis"
          style={{ marginBottom: 0 }}
        >
          OO
        </h1>
        <span
          className="breakable important-header"
          style={{ marginTop: 0, marginBottom: '20px', padding: 10 }}
        >
          may COVID-19 pa.
        </span>
        <h3>{randomQuote()}</h3>
        <div>{info()}</div>
      </header>
    </div>
  );
}

export default App;
