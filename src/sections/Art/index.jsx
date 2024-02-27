import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";
import { ART_ENDPOINT } from "./components/consts.jsx";
function ArtsSection() {
  const [artData, setArtData] = useState(null);
  const [ready, setReady] = useState(false);

  function fn() {
    fetch(`${ART_ENDPOINT}`)
      .then((response) => response.json())
      .then((data) => {
        setArtData(data);
        setReady(true);
      });
  }
  useEffect(() => {
    //setArtData(null);
    if (artData == null) {
      fn();
    }
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {ready && (
          <ul className="art-list">
            {artData &&
              artData.map((item, index) => {
                return (
                  <>
                    <li>
                      <div className="frame">
                        <img
                          src={`https://boolean-api-server.fly.dev/${item.imageURL}`}
                        />
                      </div>
                      <h3>{item.title}</h3>
                      <p>Artist: {item.artist}}</p>
                      <h4>Publication History:</h4>
                      <ul>
                        {item.publicationHistory.map((pub, num) => {
                          return <li key={num}>{pub}</li>;
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}
          </ul>
        )}
      </div>
    </section>
  );
}

export default ArtsSection;
//https://boolean-api-server.fly.dev/images/paris-street-rainy-day.jpg
