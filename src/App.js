import React, { Component } from 'react';
import './App.css';

const color = 'white';
function sortByPower(a, b){
  return b.power - a.power;
}

function List(props){
    return (
    <>
      <ul classname='list'>
          <div className='list-item'>
            <h1 className="list-item-header">Podcast Client</h1>
              <form class="example" >
                <input type="text" placeholder="Cari Podcast..."></input>
                <button type="submit">Search</button>
              </form>
          </div>
        </ul>  
        <ul className ="list">
            {props.data.sort(sortByPower).map((person) => (
              <li key={person.title} className="list-item">
                <div className="list-item-image-container">
                  <img src={person.thumbnail} />
                </div>
                <span className="list-item-name">
                  {person.title}
                  <span className="list-item-power">{person.url}</span>
                    <span className="list-lihat">Lihat >></span>
                </span>
              </li>
              
            ))}
        </ul>
  
  </>
  );
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      human: [
        {
          "id": 1,
          "title": "Ceritanya Developer",
          "thumbnail": "https://ceritanyadeveloper.com/static/images/logo-2020.png",
          "url": "https://ceritanyadeveloper.com/"
        },
        {
          "id": 2,
          "title": "Ngobrolin Startup dan Teknologi",
          "thumbnail": "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1428780/1428780-1569855022815-0e347b2a10c15.jpg",
          "url": "https://open.spotify.com/show/3cA81ivwFR2gDMF570j06X?si=AH_1jd89RcSBMyG7GBrJqw"
        },
        {
          "id": 3,
          "title": "Filosofi Kode",
          "thumbnail": "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1688059/1688059-1555899854725-f9b27854d8795.jpg",
          "url": "https://open.spotify.com/show/0yfRuGim7MFCV2TuasOdmm?si=ZDppDCR5Rye7hiKHZOxnfA"
        }
      ],
      screen: 'list'
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.screen === 'list' && (
          <List
            data={this.state.human}
            onNavigateToAddScreen={this.onNavigateToAddScreen}
          />
        )}
        
      </div>
    );
  }
}

export default App;
