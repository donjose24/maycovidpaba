import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [apiData, setApiData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const response = await axios.get("https://api.covid19api.com/total/country/philippines")
    setApiData(response.data[response.data.length-1])
    setIsLoading(false)
  }

  const info = () => {
    if (isLoading) {
      return (<img src={ process.env.PUBLIC_URL + '/spinner.gif'} alt ="loading.."/>)
    } else {
      return (
        <div>
          <h5>
            Total confirmed cases: <span style={{color: 'red'}}>{apiData.Confirmed.toLocaleString()}</span> <br/>
            Total active cases: <span style={{color: 'red'}}>{apiData.Active.toLocaleString()}</span> <br/>
            Total recoveries: <span style={{color: 'green'}}>{apiData.Recovered.toLocaleString()} </span><br/>
            Total deaths: <span style={{color: 'red'}}>{apiData.Deaths.toLocaleString()}</span> <br/>
          </h5>
        </div>
      )
    }
  }

  useEffect(() => {
    fetchData().then()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span className="with-emphasis">OO</span><span className="breakable"> </span> may <span className="breakable"> COVID-19 pa.</span>
        </h1>
        <h3>
          Huwag lumabas kung di naman kailangan.
        </h3>
          { info() }
        </header>
    </div>
  );
}

export default App;
