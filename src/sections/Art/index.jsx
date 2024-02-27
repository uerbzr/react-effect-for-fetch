import { useState, useEffect } from "react";
import ArtList from "./components/ArtList";
import { ART_ENDPOINT, IMAGE_URL_PREFIX } from "./components/consts.jsx";
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
                    <li key={index}>
                      <div className="frame">
                        <img src={`${IMAGE_URL_PREFIX}${item.imageURL}`} />
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
