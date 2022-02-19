import './App.css';
import Data from "./data.json";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("")
  return (
    <div className="App">
      <br />
      <div class="wrapper">
          <div class="typing-demo">
            Find People's GitHub Accounts
          </div>
      </div>
      <br />
      <input placeholder="find person by github username" className='search-bar' onChange={event => setQuery(event.target.value)} />
      {
        Data.filter(person => {
          if (query === '') {
            return person;
          } else if (person.login.toLowerCase().includes(query.toLowerCase())) {
            return person;
          }
        }).map((person, index) => (
          <div className="overlay-box" key={index}>
            <div className="box">
              <a href={person.html_url} className="github-link" target="_blank">
                <div className="person-profile">
                  <img src={person.avatar_url} className="profile-picture" alt="" /> 
                  <p className='person-name'> {person.login} </p>
                </div>
                <div className="person-info">
                  <p>ID: <b>{person.id}</b></p>
                  <p>User Type: <b>{person.type}</b></p>
                  <a href={person.html_url} className="person-github-link" target="_blank"><button className='person-github'><b>github-ზე გადასვლა</b></button></a>
                </div>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
