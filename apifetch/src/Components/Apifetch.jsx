import React, { useState, useEffect } from 'react';

function Apifetch() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      
      <div className="container">
        {images.map(image => (
          <div key={image.id} className="column">
            <div className="card">
              <img src={image.url} alt={image.title} className="card-img" />
              <div className="card-text">
                <p>{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apifetch;
