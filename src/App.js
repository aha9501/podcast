import React, { useState } from 'react';
import './App.css';
function App(){
  const dataList = [
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
  ];
  const [searchText,setSearchtext] = useState ("");
  const [data,setData] = useState(dataList);

  // exclude column list from filter
  const excludeColumns = ["id", "url"];



  // handle change event of search input
  const handleChange = value => {
    setSearchtext(value);
    filterData(value);
  }

  const handleSubmit = value => {
   
    filterData(value);
  }

    // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }
 return (

  
   <>
  <div className="App">
    <ul classname='list'>
            <div className='list-item'>
              <h1 className="list-item-header">Podcast Client</h1>
                <form class="example" onSubmit={handleSubmit}>
                  Search : <input type="text" placeholder="Cari Podcast..." value={searchText}
                          onChange={e => handleChange(e.target.value)}
                  />
                  <button type="submit">Search</button>
                </form>
            </div>
    </ul> 
    <ul className ="list">
      {data.map((d,i) => (
          <li key={d.title} className="list-item">
            <div className="list-item-image-container">
              <img src={d.thumbnail} />
            </div>
           <span className="list-item-name">
              {d.title}
              <span className="list-item-power">{d.url}</span>
              <span className="list-lihat">Lihat >></span>
                
            </span>
          </li>
              
      ))}
    </ul>
  </div>
  </>
 )
}


export default App;
