import './App.css';
import Data from "./MOCK_DATA.json";
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
      <input placeholder="find person by name, last name or github username" className='search-bar' onChange={event => setQuery(event.target.value)} />
      {
        Data.filter(person => {
          if (query === '') {
            return person;
          } else if (person.first_name.toLowerCase().includes(query.toLowerCase()) || person.last_name.toLowerCase().includes(query.toLowerCase()) || person.github_username.toLowerCase().includes(query.toLowerCase())) {
            return person;
          }
        }).map((person, index) => (
          <div className="overlay-box" key={index}>
            <div className="box">
              <a href={`https://github.com/@${person.github_username}`} className="github-link" target="_blank">
                <div className="person-profile">
                  <img src={person.profile_picture} className="profile-picture" alt="" /> 
                  <p className='person-name'> {person.first_name} {person.last_name}</p>
                </div>
                <div className="person-info">
                  <p>ელ. ფოსტა: <a href={`mailto:${person.email}`}>{person.email}</a></p>
                  <p>სქესი: <b>{person.gender}</b></p>
                  <a href={`https://github.com/@${person.github_username}`} className="person-github-link" target="_blank"><button className='person-github'><b>github-ზე გადასვლა</b></button></a>
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
